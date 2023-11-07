import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DistanceController, GeocodingController } from './controllers';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    /**
     *konfigurasi env
     */

    ConfigModule.forRoot(),

    /**
     * mengatur rate limiter dalam 1 second hanya 2 request
     */

    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 2,
      },
    ]),
  ],
  controllers: [GeocodingController, DistanceController],
})
export class AppModule {}
