/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {

  const exists = await knex.schema.hasTable('reservations');
  if (exists) {
    await knex('reservations').del()
  }
  // Deletes ALL existing entries
  await knex('reservations').insert([
    {
      id: 1,
      guest_id: 1,
      room_id: 1,
      room_type: 'Family Room',
      room_number: 202,
      guest_name: 'Eva Thomas',
      no_of_guests: 4,
      check_in: '2024-10-23 15:00:00',
      check_out: '2024-10-28 11:00:00',
    },
    {
      id: 2,
      guest_id: 2,
      room_id: 2,
      room_number: 101,
      room_type: 'Deluxe Room',
      guest_name: 'Sofia Jane',
      no_of_guests: 2,
      check_in: '2024-10-12 15:00:00',
      check_out: '2024-10-24 11:00:00',
    },
    {
      id: 3,
      guest_id: 1,
      room_id: 3,
      room_number: 302,
      room_type: 'Suite',
      guest_name: 'Lucas Carter',
      no_of_guests: 5,
      check_in: '2024-11-03 15:00:00',
      check_out: '2024-11-06 11:00:00',
    }
  ]);
}
