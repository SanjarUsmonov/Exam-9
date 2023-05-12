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
  //---------------------------------------------------------------------------------------------------------------------
  async postProduct([body, id]){
    
    const {name, descr, price, count} = body

    const newProduct = {
      product_name : name,
      product_descr : descr,
      product_price : price,
      product_count : count,
      user_id : id,
    }
    
    await this.knex.into('products').insert(newProduct)
    
    return newProduct;
    
  }
  
  async getProducts() {
    const product = await this.knex('products')
    return product;
  }
  
  async getProduct(id){
    const product = await this.knex('products').where({product_id:id})
    return product;
  }
  
  async getTodo(){
    const todo = await this.knex().select('user_username', 'product_name', 'product_descr', 'product_price', 'product_count', 'product_created_at').table('users').innerJoin('products', 'users.user_id', '=', 'products.user_id')
    return todo
  }
}