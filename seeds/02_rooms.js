/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  const exists = await knex.schema.hasTable('rooms');

  if(exists) {
    await knex('rooms').del()
  }
  
  await knex('rooms').insert([
    {
      id: 1,
      room_number: 101,
      room_type: 'Deluxe Room',
      capacity: 2,
      status: 'Occupied'
    },
    {
      id: 2,
      room_number: 102,
      room_type: 'Deluxe Room',
      capacity: 2,
      status: 'Available'
    },
    {
      id: 3,
      room_number: 201,
      room_type: 'Family Room',
      capacity: 4,
      status: 'Available'
    },
    {
      id: 4,
      room_number: 202,
      room_type: 'Family Room',
      capacity: 4,
      status: 'Occupied'
    },
    {
      id: 5,
      room_number: 301,
      room_type: 'Suite',
      capacity: 5,
      status: 'Available'
    },
    {
      id: 6,
      room_number: 302,
      room_type: 'Suite',
      capacity: 5,
      status: 'Occupied'
    }
  ]);
}
