import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelResolver } from './model.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ModelService, ModelResolver, PrismaService]
})
export class ModelModule {}
