import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createWriteStream } from 'fs';
import { extname } from 'path';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaClient) {}

    async getUserById(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                cars: {
                    include: {
                        model: true
                    }
                }
            }
            
        })
        return {user}
    }

    async getUserByType(type: string) {
        const user = await this.prisma.user.findMany({
            where: {
                type
            },
            include: {
                cars: true
            }
            
        })
        return user
    }

}
