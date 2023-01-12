import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RatingModule } from './rating/rating.module';
import { Product } from './product/entities/product.entity';


@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'newuser',
        password: 'password',
        database: 'e_commerce',
        // autoLoadEntities:true,
        entities:[__dirname + '/**/*.entity.{js,ts}'],
        synchronize: true,
      }),
      OrderModule,
      ProductModule,
      RatingModule
  ],
})
export class AppModule {
}
