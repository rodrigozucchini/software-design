import {
  Injectable,
  NestMiddleware,
  CanActivate,
  ExecutionContext,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  Controller,
  Get,
  Param,
  MiddlewareConsumer,
  Module,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/* =========================
   MIDDLEWARE
   ========================= */

/**
 * LoggerMiddleware
 * Runs before guards and pipes.
 * Used for logging incoming requests.
 */
@Injectable()
class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] ${req.url}`);
    next(); // Continue request flow
  }
}

/* =========================
   GUARD
   ========================= */

/**
 * AuthGuard
 * Decides if the request can access the endpoint.
 */
@Injectable()
class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    // Simple validation example
    return authHeader === 'Bearer valid-token';
  }
}

/* =========================
   PIPE
   ========================= */

/**
 * ParseNumberPipe
 * Transforms a value into a number.
 * Throws an error if conversion fails.
 */
@Injectable()
class ParseNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = Number(value);

    if (isNaN(parsedValue)) {
      throw new BadRequestException('Validation failed: value is not a number');
    }

    return parsedValue;
  }
}

/* =========================
   CONTROLLER
   ========================= */

@Controller('users')
class UserController {
  /**
   * Example endpoint
   * Guard protects access
   * Pipe transforms and validates the parameter
   */
  @Get(':id')
  getUserById(@Param('id', ParseNumberPipe) id: number) {
    return {
      message: 'User fetched successfully',
      userId: id,
    };
  }
}

/* =========================
   MODULE
   ========================= */

@Module({
  controllers: [UserController],
  providers: [AuthGuard, ParseNumberPipe],
})
class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
