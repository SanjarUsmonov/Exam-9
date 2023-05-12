import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('adverts', (table):void=>{
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'));
        table.timestamp('date', {useTz:false}).defaultTo(knex.fn.now());
        table.boolean('active').defaultTo(true);
        table.integer('sell').notNullable();
        table.integer('buy').notNullable();
        table.string('url').notNullable();
        table.string('picture').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('adverts')

}






