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
exports.createCarDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let createCarDto = class createCarDto {
};
exports.createCarDto = createCarDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], createCarDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price is required' }),
    __metadata("design:type", Number)
], createCarDto.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Body type is required' }),
    (0, class_validator_1.IsString)({ message: 'Body type must be a string' }),
    __metadata("design:type", String)
], createCarDto.prototype, "bodyType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Fuel type is required' }),
    (0, class_validator_1.IsString)({ message: 'Fuel type must be a string' }),
    __metadata("design:type", String)
], createCarDto.prototype, "fuelType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'Mileage is required' }),
    __metadata("design:type", Number)
], createCarDto.prototype, "mileage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Transmission is required' }),
    (0, class_validator_1.IsString)({ message: 'Transmission must be a string' }),
    __metadata("design:type", String)
], createCarDto.prototype, "transmission", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Registration is required' }),
    __metadata("design:type", String)
], createCarDto.prototype, "registration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'Make is required' }),
    __metadata("design:type", Number)
], createCarDto.prototype, "brandId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'Model is required' }),
    __metadata("design:type", Number)
], createCarDto.prototype, "modelId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'User is required' }),
    __metadata("design:type", Number)
], createCarDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Images is required' }),
    (0, class_validator_1.IsString)({ message: 'Images must be a string' }),
    __metadata("design:type", String)
], createCarDto.prototype, "images", void 0);
exports.createCarDto = createCarDto = __decorate([
    (0, graphql_1.InputType)()
], createCarDto);
//# sourceMappingURL=car.dto.js.map