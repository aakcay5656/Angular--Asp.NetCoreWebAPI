using Microsoft.EntityFrameworkCore;
using System;
using TelRehAPİ.Data;
using TelRehAPİ.Model.Domain;
using TelRehAPİ.Repositories.Interface;

namespace TelRehAPİ.Repositories.Implementation
{
    public class PersonRepository : IPersonRepository
    {
        private readonly TellDbContext dbContext;

        public PersonRepository(TellDbContext dbContext) {
            this.dbContext = dbContext;    
        }
        public async Task<KisiOz> CreateAsync(KisiOz person)
        {
            await dbContext.Kisioz.AddAsync(person);
            await dbContext.SaveChangesAsync();

            return person;
        }

       

        public async Task<IEnumerable<KisiOz>> GetAllAsync()
        {
           return await dbContext.Kisioz.ToListAsync();
        }

        public async Task<KisiOz?> GetById(Guid id)
        {
         return  await dbContext.Kisioz.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<KisiOz?> UpdateAsync(KisiOz Person)
        {
            var existingPerson= await dbContext.Kisioz.FirstOrDefaultAsync(x=>x.Id == Person.Id);
            if (existingPerson != null)
            {
                dbContext.Entry(existingPerson).CurrentValues.SetValues(Person);
                await dbContext.SaveChangesAsync();
                return Person;
            }
            return null;
        }
        public async Task<KisiOz?> DeleteAsync(Guid id)
        {
           var existingPerson= await dbContext.Kisioz.FirstOrDefaultAsync(x=>x.Id == id);
            if (existingPerson is null)
            {
                return null;
            }

            dbContext.Kisioz.Remove(existingPerson);
            await dbContext.SaveChangesAsync();
            return existingPerson;
        }
    }
}
