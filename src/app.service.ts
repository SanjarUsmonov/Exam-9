import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class AppService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}
  //Get All Users
  async getUsers() {
    const user = await this.knex('users')
    return user;
  }
  //Get one User
  async getUser(id){
    const user = await this.knex('users').where({user_id:id})
    return user;
  }
  //Get filter by date 
  async getUsersByFilter(date){
    const users = await this.knex('users').whereBetween('user_created_at', [date[0], date[1]])
    return users;
  }

}
