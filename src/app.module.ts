import { Module } from '@nestjs/common';
import { PrismaModule } from "./modules/prisma/prisma.module";
import { AuthModule } from "./modules/auth/auth.module";
import {ConfigModule} from "@nestjs/config";
@Module({
  imports: [PrismaModule, AuthModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
