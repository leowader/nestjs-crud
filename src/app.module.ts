import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [TaskModule, UsersModule, ProductsModule],
})
export class AppModule {}
