"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async refreshToken(req, res) {
        const refreshToken = req.cookies['refreshToken'];
        if (!refreshToken)
            throw new common_1.UnauthorizedException('Refresh token not found');
        let payload;
        try {
            payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            });
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const userExists = await this.prisma.user.findUnique({
            where: { id: payload.sub }
        });
        if (!userExists)
            throw new common_1.BadRequestException('User not longer exists');
        const expiresIn = 15000;
        const expiration = Math.floor(Date.now() / 1000) + expiresIn;
        const accessToken = this.jwtService.sign({ ...payload, exp: expiration }, {
            secret: this.configService.get('ACCESS_TOKEN_SECRET'),
        });
        res.cookie('accessToken', accessToken, { httpOnly: true });
        return accessToken;
    }
    async issueToken(user, res) {
        const payload = { username: user.name, sub: user.id };
        const accessToken = this.jwtService.sign({ ...payload }, {
            secret: this.configService.get('ACCESS_TOKEN_SECRET'),
            expiresIn: '150sec'
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            expiresIn: '7d'
        });
        res.cookie('accessToken', accessToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        return { user };
    }
    async validateUser(loginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginDto.email }
        });
        if (user && (await bcrypt.compare(loginDto.password, user.password))) {
            return user;
        }
        return null;
    }
    async register(registerDto, response) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: registerDto.email }
        });
        if (existingUser)
            throw new common_1.BadRequestException({ email: 'Email already exists' });
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                name: registerDto.name,
                surname: registerDto.surname,
                email: registerDto.email,
                password: hashedPassword,
                image: registerDto.image,
                type: registerDto.type,
            }
        });
        return this.issueToken(user, response);
    }
    async login(loginDto, response) {
        const user = await this.validateUser(loginDto);
        if (!user)
            throw new common_1.BadRequestException({ invalidCredentials: 'Invalid credentials' });
        return this.issueToken(user, response);
    }
    async logout(response) {
        response.clearCookie('accessToken');
        response.clearCookie('refreshToken');
        return 'Success logged out';
    }
    async UpdateUser(updateDto, response) {
        const user = await this.prisma.user.update({
            where: { email: updateDto.email },
            data: {
                image: updateDto.image,
                location: updateDto.location,
                name: updateDto.name,
                surname: updateDto.surname,
                phone: updateDto.phone,
            }
        });
        return this.issueToken(user, response);
    }
    async UpdatePassword(updatePasswordDto, response) {
        const hashedPassword = await bcrypt.hash(updatePasswordDto.password, 10);
        const user = await this.prisma.user.update({
            where: { email: updatePasswordDto.email },
            data: {
                password: hashedPassword
            }
        });
        return this.issueToken(user, response);
    }
    async UpdateEmail(updateEmailDto, response) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: updateEmailDto.email }
        });
        if (existingUser)
            throw new common_1.BadRequestException({ email: 'Email already exists' });
        const user = await this.prisma.user.update({
            where: { id: updateEmailDto.id },
            data: {
                email: updateEmailDto.email
            }
        });
        return this.issueToken(user, response);
    }
    async UpdateType(updateTypeDto, response) {
        const user = await this.prisma.user.update({
            where: { email: updateTypeDto.email },
            data: {
                type: updateTypeDto.type
            }
        });
        return this.issueToken(user, response);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map