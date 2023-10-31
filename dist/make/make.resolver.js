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
exports.MakeResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const custom_exception_filter_1 = require("../filter/custom-exception.filter");
const make_types_1 = require("./make.types");
const make_dto_1 = require("./make.dto");
const make_service_1 = require("./make.service");
const make_model_1 = require("./make.model");
const car_model_1 = require("../car/car.model");
let MakeResolver = class MakeResolver {
    constructor(makeService) {
        this.makeService = makeService;
    }
    async createMake(createDto) {
        return await this.makeService.createMake(createDto);
    }
    async getAllMakes() {
        return await this.makeService.getAllMakes();
    }
    async getAllCarByMake(makeId) {
        return await this.makeService.getAllCarByMake(makeId);
    }
};
exports.MakeResolver = MakeResolver;
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => make_types_1.CreateMakeResponse),
    __param(0, (0, graphql_1.Args)('createMakeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [make_dto_1.createMakeDto]),
    __metadata("design:returntype", Promise)
], MakeResolver.prototype, "createMake", null);
__decorate([
    (0, graphql_1.Query)(() => [make_model_1.Make]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MakeResolver.prototype, "getAllMakes", null);
__decorate([
    (0, graphql_1.Query)(() => [car_model_1.Car]),
    __param(0, (0, graphql_1.Args)('makeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MakeResolver.prototype, "getAllCarByMake", null);
exports.MakeResolver = MakeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [make_service_1.MakeService])
], MakeResolver);
//# sourceMappingURL=make.resolver.js.map