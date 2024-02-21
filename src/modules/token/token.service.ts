import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService
  ) {}
  async getTokens(userId: string, username: string) {
    const accessToken = await this.jwtService.signAsync(
      {
        id: userId,
        username,
      },
      {
        secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.getOrThrow('JWT_ACCESS_EXPIRE'),
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      {
        id: userId,
        username,
      },
      {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.get('JWT_REFRESH_EXPIRE'),
      },
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}
