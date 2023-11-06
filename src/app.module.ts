import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DistanceController, GeocodingController } from './controllers';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GeocodingController, DistanceController],
})
export class AppModule {}
