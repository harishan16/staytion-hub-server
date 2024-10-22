/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('rooms').del()
  await knex('rooms').insert([
    {
      id: 1,
      room_number: 301,
      room_type: 'Deluxe',
      capacity: 2,
      status: 'Available'
    },
    {
      id: 2,
      room_number: 302,
      room_type: 'Deluxe',
      capacity: 2,
      status: 'Available'
    },
    {
      id: 3,
      room_number: 303,
      room_type: 'Deluxe',
      capacity: 2,
      status: 'Occupied'
    }
  ]);
}
