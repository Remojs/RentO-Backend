import { Module } from '@nestjs/common';
import { EstatesModule } from './estates/estates.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localost/nest'), EstatesModule],
})
export class AppModule {}
