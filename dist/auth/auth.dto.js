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
exports.updateTypeDto = exports.updateEmailDto = exports.updatePasswordDto = exports.UpdateDto = exports.LoginDto = exports.RegisterDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let RegisterDto = class RegisterDto {
};
exports.RegisterDto = RegisterDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.MinLength)(3, { message: 'Name must be at least 3 characters' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Type is required' }),
    (0, class_validator_1.IsString)({ message: 'Type must be a string' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Surname is required' }),
    (0, class_validator_1.IsString)({ message: 'Surname must be a string' }),
    (0, class_validator_1.MinLength)(3, { message: 'Surname must be at least 3 characters' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "surname", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email is invalid' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.MinLength)(5, { message: 'Password must be at least 5 characters' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "image", void 0);
exports.RegisterDto = RegisterDto = __decorate([
    (0, graphql_1.InputType)()
], RegisterDto);
let LoginDto = class LoginDto {
};
exports.LoginDto = LoginDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto = __decorate([
    (0, graphql_1.InputType)()
], LoginDto);
let UpdateDto = class UpdateDto {
};
exports.UpdateDto = UpdateDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid' }),
    __metadata("design:type", String)
], UpdateDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDto.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDto.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.MinLength)(3, { message: 'Name must be at least 3 characters' }),
    __metadata("design:type", String)
], UpdateDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)({ message: 'Surname must be a string' }),
    (0, class_validator_1.MinLength)(3, { message: 'Surname must be at least 3 characters' }),
    __metadata("design:type", String)
], UpdateDto.prototype, "surname", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)('RU', { message: 'Phone must be a valid phone number' }),
    __metadata("design:type", String)
], UpdateDto.prototype, "phone", void 0);
exports.UpdateDto = UpdateDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateDto);
let updatePasswordDto = class updatePasswordDto {
};
exports.updatePasswordDto = updatePasswordDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], updatePasswordDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.MinLength)(5, { message: 'Password must be at least 5 characters' }),
    __metadata("design:type", String)
], updatePasswordDto.prototype, "password", void 0);
exports.updatePasswordDto = updatePasswordDto = __decorate([
    (0, graphql_1.InputType)()
], updatePasswordDto);
let updateEmailDto = class updateEmailDto {
};
exports.updateEmailDto = updateEmailDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'Id is required' }),
    __metadata("design:type", Number)
], updateEmailDto.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid' }),
    __metadata("design:type", String)
], updateEmailDto.prototype, "email", void 0);
exports.updateEmailDto = updateEmailDto = __decorate([
    (0, graphql_1.InputType)()
], updateEmailDto);
let updateTypeDto = class updateTypeDto {
};
exports.updateTypeDto = updateTypeDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid' }),
    __metadata("design:type", String)
], updateTypeDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Type is required' }),
    (0, class_validator_1.IsString)({ message: 'Type must be a string' }),
    __metadata("design:type", String)
], updateTypeDto.prototype, "type", void 0);
exports.updateTypeDto = updateTypeDto = __decorate([
    (0, graphql_1.InputType)()
], updateTypeDto);
//# sourceMappingURL=auth.dto.js.map