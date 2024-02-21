import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AccessTokenStrategy } from './strategys/accessToken.strategy';
import { UsersModule } from '../users/users.module';
import { TokenModule } from '../token/token.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TokenModule,
    UsersModule,
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy],
})
export class AuthModule {}
