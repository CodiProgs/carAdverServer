import { Module } from '@nestjs/common';
import { MakeService } from './make.service';
import { MakeResolver } from './make.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MakeService, MakeResolver, PrismaService]
})
export class MakeModule {}
