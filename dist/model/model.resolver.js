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
exports.ModelResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const custom_exception_filter_1 = require("../filter/custom-exception.filter");
const model_types_1 = require("./model.types");
const model_dto_1 = require("./model.dto");
const model_service_1 = require("./model.service");
const model_model_1 = require("./model.model");
let ModelResolver = class ModelResolver {
    constructor(modelService) {
        this.modelService = modelService;
    }
    async createModel(createModelDto) {
        return this.modelService.createModel(createModelDto);
    }
    async getModelsAll() {
        return this.modelService.getModelsAll();
    }
};
exports.ModelResolver = ModelResolver;
__decorate([
    (0, common_1.UseFilters)(custom_exception_filter_1.GraphQLErrorFilter),
    (0, graphql_1.Mutation)(() => model_types_1.CreateModelResponse),
    __param(0, (0, graphql_1.Args)('createModelInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_dto_1.createModelDto]),
    __metadata("design:returntype", Promise)
], ModelResolver.prototype, "createModel", null);
__decorate([
    (0, graphql_1.Query)(() => [model_model_1.Model]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModelResolver.prototype, "getModelsAll", null);
exports.ModelResolver = ModelResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [model_service_1.ModelService])
], ModelResolver);
//# sourceMappingURL=model.resolver.js.map