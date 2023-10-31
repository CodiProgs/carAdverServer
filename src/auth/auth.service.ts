import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/user/user.model';
import { LoginDto, RegisterDto, UpdateDto, updateEmailDto, updatePasswordDto, updateTypeDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    async refreshToken(req: Request, res: Response): Promise<string> {
        const refreshToken = req.cookies['refreshToken'];
        if(!refreshToken) throw new UnauthorizedException('Refresh token not found');

        let payload
        try {
            payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
            })
        }catch (e) {
            throw new UnauthorizedException('Invalid refresh token');
        }

        const userExists = await this.prisma.user.findUnique({
            where: { id: payload.sub }
        })
        if(!userExists) throw new BadRequestException('User not longer exists');

        const expiresIn = 15000
        const expiration = Math.floor(Date.now() / 1000) + expiresIn
        const accessToken = this.jwtService.sign(
            {...payload, exp: expiration},
            {
                secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
            }
        )
        res.cookie('accessToken', accessToken, { httpOnly: true })
        return accessToken
    }

    private async issueToken(user: User, res: Response) {
        const payload = { username: user.name, sub: user.id }
        const accessToken = this.jwtService.sign(
            {...payload},
            {
                secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
                expiresIn: '150sec'
            }
        )

        const refreshToken = this.jwtService.sign(
            payload, {
                secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
                expiresIn: '7d'
            }
        )

        res.cookie('accessToken', accessToken, { httpOnly: true })
        res.cookie('refreshToken', refreshToken, { httpOnly: true })

        return { user }
    }

    async validateUser(loginDto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginDto.email }
        })

        if(user && (await bcrypt.compare(loginDto.password, user.password))) {
            return user
        }
        return null
    }

    async register(registerDto: RegisterDto, response: Response) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: registerDto.email }
        })
        if(existingUser) throw new BadRequestException({email: 'Email already exists'})

        const hashedPassword = await bcrypt.hash(registerDto.password, 10)
        const user = await this.prisma.user.create({
            data: {
                name: registerDto.name,
                surname: registerDto.surname,
                email: registerDto.email,
                password: hashedPassword,
                image: registerDto.image,
                type: registerDto.type,
            }
        })

        return this.issueToken(user, response)
    }

    async login(loginDto: LoginDto, response: Response) {
        const user = await this.validateUser(loginDto)
        if(!user) throw new BadRequestException({invalidCredentials: 'Invalid credentials'})

        return this.issueToken(user, response)
    }

    async logout(response: Response) {
        response.clearCookie('accessToken')
        response.clearCookie('refreshToken')
        return 'Success logged out'
    }

    async UpdateUser(updateDto: UpdateDto, response: Response) {
        const user = await this.prisma.user.update({
            where: { email: updateDto.email },
            data: {
                image: updateDto.image,
                location: updateDto.location,
                name: updateDto.name,
                surname: updateDto.surname,
                phone: updateDto.phone,
                
            }
        })
        return this.issueToken(user, response)
    }

    async UpdatePassword(updatePasswordDto: updatePasswordDto, response: Response) {
        const hashedPassword = await bcrypt.hash(updatePasswordDto.password, 10)
        const user = await this.prisma.user.update({
            where: { email: updatePasswordDto.email },
            data: {
                password: hashedPassword
            }
        })
        return this.issueToken(user, response)
    }

    async UpdateEmail(updateEmailDto: updateEmailDto, response: Response) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: updateEmailDto.email }
        })
        if(existingUser) throw new BadRequestException({email: 'Email already exists'})

        const user = await this.prisma.user.update({
            where: { id: updateEmailDto.id },
            data: {
                email: updateEmailDto.email
            }
        })
        return this.issueToken(user, response)
    }

    async UpdateType(updateTypeDto: updateTypeDto, response: Response) {
        const user = await this.prisma.user.update({
            where: { email: updateTypeDto.email },
            data: {
                type: updateTypeDto.type
            }
        })
        return this.issueToken(user, response)
    }
}

