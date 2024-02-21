import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  // statusCode: number;
  // message: string;
  // data: T;
  status: number;
  data: {
    success: boolean;
    payload: T & {
      errors: any;
      errorsData: any;
    };
  };
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        status: context.switchToHttp().getResponse().statusCode,
        data: {
          success: true,
          payload: data,
        },
      })),
    );
  }
}
