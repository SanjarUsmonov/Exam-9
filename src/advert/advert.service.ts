import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { DataDTO } from './dto/create-auth.dto';

@Injectable()
export class AppService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}
  //POST
  async postAdvert(body: DataDTO, file: Express.Multer.File) {
    const { sell, buy, url } = body;
    const picture = file;

    if (!picture) {
      return 'Picture is required';
    }

    const newAdvert = {
      sell: sell,
      buy: buy,
      url: url,
      picture: picture.filename,
    };
    await this.knex.into('adverts').insert(newAdvert);
    return newAdvert;
  }
  //GET
  async getAdvert() {
    const advert = await this.knex('adverts');
    return advert;
  }
  //GET ONE
  async getAdvertOne(id) {
    const advert = await this.knex('adverts').where(id, '=', 'id');
    return advert;
  }
  //GET BY DATE
  async getUsersByFilter(date) {
    const advert = await this.knex('adverts').whereBetween('date', [
      date[0],
      date[1],
    ]);
    return advert;
  }
  //PUT
  async putAdvert([body, id]) {
    const { sell, buy, url } = body;
    const advert = await this.knex('adverts')
      .update({ sell: sell, buy: buy, url: url })
      .where('id', '=', id)
      .returning('*');

    return advert;
  }
  //DELETE
  async delAdvert(id) {
    const advert = await this.knex('adverts').where({ id: id }).del();
    return 'User deleted!';
  }
}
