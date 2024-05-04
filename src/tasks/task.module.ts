import { Module } from "@nestjs/common";
import { TasksController } from './tasks.controller';
import { TasksService } from "./tasks.service";
@Module({
  controllers: [TasksController],//controladores
  providers:[TasksService]//servicios
})
export class TaskModule{
   
}
