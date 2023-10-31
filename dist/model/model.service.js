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
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ModelService = class ModelService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createModel(createModelDto) {
        const model = await this.prisma.model.create({
            data: {
                name: createModelDto.name,
                brandsId: createModelDto.makeId,
            },
            select: {
                id: true,
                name: true,
                brand: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
        return { model };
    }
    async getModelsAll() {
        return this.prisma.model.findMany({
            include: {
                brand: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
    }
};
exports.ModelService = ModelService;
exports.ModelService = ModelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModelService);
//# sourceMappingURL=model.service.js.map