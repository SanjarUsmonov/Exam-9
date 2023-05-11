import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/create-auth.dto';
import { RegisterDTO } from './dto/update-auth.dto';
import { Knex } from 'knex';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}

//--------------------------------------------------------------------------------------------------------------------------

//LOGIN PAGE
async login(body: LoginDTO) {
  //Get request body
  const { username, password } = body;
  //Find user from database
  const [data] = await this.knex('users')
  .select('*')
  .where({ user_username: username.toLowerCase() });
  if (!data) {
    return "error"
  }
  //Comparing password
  const testData = await bcrypt.compare(password, data.user_password);
  //Testing
  if (testData) {
    return data;
  }
}

//--------------------------------------------------------------------------------------------------------------------------

  //REGISTER PAGE
  async register(body: RegisterDTO) {
    //Get request body
    const { username, password } = body;
    //Find user from database
    const data = await this.knex('users')
      .select('*')
      .where({ user_username: username })
      .first();
    //If user null or exist return error 403
    if (data) throw new ForbiddenException('Username already in exists!');
    //Password hashing
    const hashedPassword = await bcrypt.hash(password, 12);
    //New data drop into object
    const newData = {
      user_username: username.toLowerCase(),
      user_password: hashedPassword,
    };
    //Wrote data to database
    await this.knex.into('users').insert(newData);
    // Returning data to Front
    return newData;
  }
}
