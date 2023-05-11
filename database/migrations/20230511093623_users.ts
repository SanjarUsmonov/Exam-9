import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table):void=>{
        table.uuid('user_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('user_username').notNullable().unique();
        table.string('user_password').notNullable();
        table.boolean('user_is_active').defaultTo(true);
        table.timestamp('user_created_at', {useTz:false}).defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
}

