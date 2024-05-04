import { Injectable } from "@nestjs/common";
@Injectable()
export class TasksService {
    getTask(){
        return {
            data: [
              'estudiar spring boot',
              'realizar curso de cisco',
              'estudiar redes',
            ],
          };
    }
}
