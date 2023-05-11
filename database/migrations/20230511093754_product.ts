import {Knex} from "knex"

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', (table):void=>{
        table.uuid('product_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.uuid('user_id').references('user_id').inTable('users')
        table.string('product_name').notNullable();
        table.string('product_descr').notNullable();
        table.integer('product_price').notNullable();
        table.integer('product_count').notNullable();
        table.boolean('product_is_active').defaultTo(true);
        table.timestamp('product_created_at', {useTz:false}).defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('products')

}