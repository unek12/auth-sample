import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface Exception {
  message: string;
  error: string;
  statusCode: number;
}

@Catch(HttpException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as Exception;

    response.status(status).json({
      status,
      data: {
        payload: {
          success: false,
          errors: error.message,
          errorsData: exception.message,
        },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
