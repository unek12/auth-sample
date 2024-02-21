import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import * as process from 'process';
import { UsersService } from '../modules/users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class refreshTokenGuard extends AuthGuard('jwt-refresh') {
  // constructor(
  //   private readonly jwtService: JwtService,
  //   private readonly userService: UsersService,
  //   private readonly configService: ConfigService,
  // ) {
  //   super();
  // }

  // async validate(req: Request, payload: any) {
  //   const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
  //
  //   const decodedToken = await this.jwtService.verify(refreshToken, {secret: process.env['JWT_ACCESS_SECRET']});
  //
  //   if (!decodedToken) {
  //     return false;
  //   }
  //
  //   const user = await this.userService.findById(decodedToken.sub);
  //   console.log(user)
  //   if (user && user.refresh === refreshToken) {
  //     return {refreshToken, ...payload};
  //   }
  //
  //   return false;
  // }

  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const request = context.switchToHttp().getRequest();
  //   const token = request.get('Authorization')?.replace('Bearer', '').trim();
  //
  //   if (!token) {
  //     return false;
  //   }
  //
  //   try {
  //     const decodedToken = await this.jwtService.verify(token, {
  //       secret: this.configService.get('JWT_REFRESH_SECRET'),
  //     });
  //     const user = await this.userService.findById(decodedToken.id);
  //     if (user && user.refresh === token) {
  //       request.user = user;
  //       return true;
  //     }
  //   } catch (e) {
  //     return false;
  //   }
  //
  //   return false;
  // }
}
