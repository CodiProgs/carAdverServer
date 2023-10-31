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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_dto_1 = require("../auth/auth.dto");
const auth_service_1 = require("../auth/auth.service");
const auth_types_1 = require("../auth/auth.types");
const custom_exception_filter_1 = require("../filter/custom-exception.filter");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
const user_types_1 = require("./user.types");
let UserResolver = class UserResolver {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async register(registerDto, context) {
        const { user } = await this.authService.register(registerDto, context.res);
        return { user };
    }
    async login(loginDto, context) {
        return await this.authService.login(loginDto, context.res);
    }
    async logout(context) {
        return this.authService.logout(context.res);
    }
    async refreshToken(context) {
        try {
            return this.authService.refreshToken(context.req, context.res);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    hello() {
        return 'Hello World';
    }
    async getUserById(id) {
        return this.userService.getUserById(id);
    }
    async updateUser(updateDto, context) {
        return await this.authService.UpdateUser(updateDto, context.res);
    }
    async updatePassword(updatePasswordDto, context) {
        return await this.authService.UpdatePassword(updatePasswordDto, context.res);
    }
    async updateEmail(updateEmailDto, context) {
        return await this.authService.UpdateEmail(updateEmailDto, context.res);
    }
    async updateType(updateTypeDto, context) {
        return await this.authService.UpdateType(updateTypeDto, context.res);
    }
    async getUsersByType(type) {
        return this.userService.getUserByType(type);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => auth_types_1.RegisterResponse),
    __param(0, (0, graphql_1.Args)('registerInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => auth_types_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('loginInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "refreshToken", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "hello", null);
__decorate([
    (0, graphql_1.Query)(() => user_types_1.getUserByIdResponse),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserById", null);
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => auth_types_1.UpdateResponse),
    __param(0, (0, graphql_1.Args)('updateInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UpdateDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => auth_types_1.UpdateResponse),
    __param(0, (0, graphql_1.Args)('updatePasswordInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.updatePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updatePassword", null);
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => auth_types_1.UpdateResponse),
    __param(0, (0, graphql_1.Args)('updateEmailInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.updateEmailDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateEmail", null);
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => auth_types_1.UpdateResponse),
    __param(0, (0, graphql_1.Args)('updateTypeInput')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.updateTypeDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateType", null);
__decorate([
    (0, graphql_1.Query)(() => [user_model_1.User]),
    __param(0, (0, graphql_1.Args)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsersByType", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map