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
exports.CarResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const custom_exception_filter_1 = require("../filter/custom-exception.filter");
const car_types_1 = require("./car.types");
const car_dto_1 = require("./car.dto");
const car_service_1 = require("./car.service");
const car_model_1 = require("./car.model");
let CarResolver = class CarResolver {
    constructor(carService) {
        this.carService = carService;
    }
    async createCar(createCarDto) {
        return await this.carService.createCar(createCarDto);
    }
    async getCarById(id) {
        return await this.carService.getCarById(id);
    }
    async getAllCars() {
        return await this.carService.getAllCars();
    }
};
exports.CarResolver = CarResolver;
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => car_types_1.CreateCarResponse),
    __param(0, (0, graphql_1.Args)('createCarInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.createCarDto]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "createCar", null);
__decorate([
    (0, graphql_1.Query)(() => car_model_1.Car),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "getCarById", null);
__decorate([
    (0, graphql_1.Query)(() => [car_model_1.Car]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarResolver.prototype, "getAllCars", null);
exports.CarResolver = CarResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarResolver);
//# sourceMappingURL=car.resolver.js.map