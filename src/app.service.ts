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
}
