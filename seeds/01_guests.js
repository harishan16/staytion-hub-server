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
      name: 'Eva Thomas',
      contact_number: '+1(647)-835-8531',
      contact_email: 'eva@gmail.com',
      address: '34, Erskie Ave',
      city: 'Toronto',
      country: 'Canada',
    },
    {
      id: 2,
      name: 'Sofia Jane',
      contact_number: '+1(647)-845-8531',
      contact_email: 'sofia@yahoo.com',
      address: '4, Dufferin Ave',
      city: 'Toronto',
      country: 'Canada',
    },
    {
      id: 3,
      name: 'Lucas Carter',
      contact_number: '+1(947)-822-4166',
      contact_email: 'lcarter@gmail.com',
      address: '138, Redpath Street',
      city: 'Toronto',
      country: 'Canada',
    },
    {
      id: 4,
      name: 'Mia Jonas',
      contact_number: '+1(647)-221-4162',
      contact_email: 'miaj@gmail.com',
      address: '',
      city: '',
      country: '',
    },
    {
      id: 3,
      name: 'Sana Benette',
      contact_number: '+1(937)-924-7529',
      contact_email: 'sana@gmail.com',
      address: '',
      city: '',
      country: '',
    }
  ]);
}
