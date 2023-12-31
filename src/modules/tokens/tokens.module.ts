import {Module} from '@nestjs/common';
import {TokensService} from './tokens.service';
import {JwtModule} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env['JWT_SECRET']
    })
  ],
  providers: [TokensService]
})
export class TokensModule {
}
