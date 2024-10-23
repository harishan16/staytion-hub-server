/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('reservations', (table) => {
        table.increments('id').primary();
        table
            .integer('guest_id')
            .unsigned()
            .references('id')
            .inTable('guests')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('room_id')
            .unsigned()
            .references('id')
            .inTable('rooms')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('room_number').notNullable();
        // table
        //     .string('guest_name')
        //     .unsigned()
        //     .references('id')
        //     .inTable('guests')
        //     .onUpdate('CASCADE')
        //     .onDelete('CASCADE');
        table.string('guest_name').notNullable();
        table.integer('no_of_guests').notNullable();
        table.timestamp('check_in').notNullable();
        table.timestamp('check_out').notNullable();
        table.check('check_out > check_in');
        table.string('proof_document').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('reservations');
  
}
