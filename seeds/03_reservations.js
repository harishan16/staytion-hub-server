/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reservations').del()
  await knex('reservations').insert([
    {
      id: 1,
      guest_id: 1,
      room_id: 1,
      no_of_guests: 4,
      check_in: '2024-10-23 14:00:00',
      check_out: '2024-10-28 11:00:00',
      proof_document: 'Driver Licence',
    },
    {
      id: 2,
      guest_id: 2,
      room_id: 2,
      no_of_guests: 4,
      check_in: '2024-10-12 14:00:00',
      check_out: '2024-10-24 11:00:00',
      proof_document: 'Driver Licence',
    },
    {
      id: 3,
      guest_id: 1,
      room_id: 3,
      no_of_guests: 4,
      check_in: '2024-10-10 14:00:00',
      check_out: '2024-10-11 11:00:00',
      proof_document: 'Driver Licence',
    }
  ]);
}
