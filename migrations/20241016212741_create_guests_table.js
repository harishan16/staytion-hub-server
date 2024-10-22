/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('guests', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('contact_number').notNullable();
        table.string('contact_email').notNullable();
        table.string('address').notNullable();
        table.string('city').notNullable();
        table.string('country').notNullable();
        // table.string('proof_of_document').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
   return knex.schema.dropTable('guests');  
}
