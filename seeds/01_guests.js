/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('guests').del()
  await knex('guests').insert([
    {
      id: 1,
      name: 'Sam Andreson',
      contact_number: '+1(647)-835-8531',
      contact_email: 'sam@gmail.com',
      address: '34, Erskie Ave',
      city: 'Toronto',
      country: 'Canada',
    },
    {
      id: 2,
      name: 'Sam Andreson',
      contact_number: '+1(647)-835-8531',
      contact_email: 'sam@gmail.com',
      address: '34, Erskie Ave',
      city: 'Toronto',
      country: 'Canada',
    },
    {
      id: 3,
      name: 'Sam Andreson',
      contact_number: '+1(647)-835-8531',
      contact_email: 'sam@gmail.com',
      address: '34, Erskie Ave',
      city: 'Toronto',
      country: 'Canada',
    }
  ]);
}
