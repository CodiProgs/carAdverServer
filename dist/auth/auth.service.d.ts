import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/user/user.model';
import { LoginDto, RegisterDto, UpdateDto, updateEmailDto, updatePasswordDto, updateTypeDto } from './auth.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    refreshToken(req: Request, res: Response): Promise<string>;
    private issueToken;
    validateUser(loginDto: LoginDto): Promise<{
        id: number;
        name: string;
        surname: string;
        location: string;
        image: string;
        email: string;
        phone: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
    }>;
    register(registerDto: RegisterDto, response: Response): Promise<{
        user: User;
    }>;
    login(loginDto: LoginDto, response: Response): Promise<{
        user: User;
    }>;
    logout(response: Response): Promise<string>;
    UpdateUser(updateDto: UpdateDto, response: Response): Promise<{
        user: User;
    }>;
    UpdatePassword(updatePasswordDto: updatePasswordDto, response: Response): Promise<{
        user: User;
    }>;
    UpdateEmail(updateEmailDto: updateEmailDto, response: Response): Promise<{
        user: User;
    }>;
    UpdateType(updateTypeDto: updateTypeDto, response: Response): Promise<{
        user: User;
    }>;
}
