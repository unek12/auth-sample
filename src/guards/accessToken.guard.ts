import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../modules/users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class accessTokenGuard extends AuthGuard('jwt') {
  //
  // constructor(
  //   private readonly jwtService: JwtService,
  //   private readonly userService: UsersService,
  //   private readonly configService: ConfigService,
  // ) {
  //   super();
  // }
  //
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
  //       secret: this.configService.get('JWT_ACCESS_SECRET'),
  //     });
  //     const user = await this.userService.findById(decodedToken.id);
  //     if (user) {
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
