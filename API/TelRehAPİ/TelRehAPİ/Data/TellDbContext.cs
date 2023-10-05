using Microsoft.EntityFrameworkCore;
using TelRehAPİ.Model.Domain;

namespace TelRehAPİ.Data
{
    public class TellDbContext : DbContext
    {
        public TellDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<KisiOz> Kisioz { get; set; }
    }
}
