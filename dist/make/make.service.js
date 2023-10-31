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
exports.MakeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let MakeService = class MakeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMake(createDto) {
        const make = await this.prisma.brand.create({
            data: {
                name: createDto.name,
                image: createDto.image,
            }
        });
        return { make };
    }
    async getAllMakes() {
        return await this.prisma.brand.findMany();
    }
    async getAllCarByMake(makeId) {
        return await this.prisma.car.findMany({
            where: {
                brandId: makeId
            },
            include: {
                model: true
            }
        });
    }
};
exports.MakeService = MakeService;
exports.MakeService = MakeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MakeService);
//# sourceMappingURL=make.service.js.map