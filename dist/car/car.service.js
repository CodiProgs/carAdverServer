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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CarService = class CarService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createCar(createCarDto) {
        const car = await this.prisma.car.create({
            data: {
                name: createCarDto.name,
                price: createCarDto.price,
                bodyType: createCarDto.bodyType,
                fuelType: createCarDto.fuelType,
                mileage: createCarDto.mileage,
                transmission: createCarDto.transmission,
                registration: createCarDto.registration,
                brandId: createCarDto.brandId,
                modelId: createCarDto.modelId,
                userId: createCarDto.userId,
                images: createCarDto.images
            },
        });
        return { car };
    }
    async getCarById(id) {
        return await this.prisma.car.findUnique({
            where: {
                id: id
            },
            include: {
                user: true,
                model: true,
                brand: true
            }
        });
    }
    async getAllCars() {
        const cars = await this.prisma.car.findMany({
            include: {
                user: true,
                model: true,
                brand: true
            }
        });
        return cars;
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarService);
//# sourceMappingURL=car.service.js.map