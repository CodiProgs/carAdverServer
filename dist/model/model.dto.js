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
exports.brandsIdDto = exports.createModelDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let createModelDto = class createModelDto {
};
exports.createModelDto = createModelDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    __metadata("design:type", String)
], createModelDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)({ message: 'Make is required' }),
    (0, class_validator_1.Min)(1, { message: 'Make is required' }),
    __metadata("design:type", Number)
], createModelDto.prototype, "makeId", void 0);
exports.createModelDto = createModelDto = __decorate([
    (0, graphql_1.InputType)()
], createModelDto);
let brandsIdDto = class brandsIdDto {
};
exports.brandsIdDto = brandsIdDto;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], brandsIdDto.prototype, "brandsId", void 0);
exports.brandsIdDto = brandsIdDto = __decorate([
    (0, graphql_1.InputType)()
], brandsIdDto);
//# sourceMappingURL=model.dto.js.map