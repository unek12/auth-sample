import {ExecutionContext, Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {JwtService} from "@nestjs/jwt";
import {Request} from "express";
import * as process from "process";
import {UsersService} from "../modules/users/users.service";

@Injectable()
export class accessTokenGuard extends AuthGuard('jwt') {}