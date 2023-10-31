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
exports.Car = void 0;
const graphql_1 = require("@nestjs/graphql");
const make_model_1 = require("../make/make.model");
const model_model_1 = require("../model/model.model");
const user_model_1 = require("../user/user.model");
let Car = class Car {
};
exports.Car = Car;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "bodyType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "fuelType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "mileage", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "transmission", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Car.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Car.prototype, "registration", void 0);
__decorate([
    (0, graphql_1.Field)(() => make_model_1.Make, { nullable: true }),
    __metadata("design:type", make_model_1.Make)
], Car.prototype, "brand", void 0);
__decorate([
    (0, graphql_1.Field)(() => model_model_1.Model, { nullable: true }),
    __metadata("design:type", model_model_1.Model)
], Car.prototype, "model", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", user_model_1.User)
], Car.prototype, "user", void 0);
exports.Car = Car = __decorate([
    (0, graphql_1.ObjectType)()
], Car);
//# sourceMappingURL=car.model.js.map