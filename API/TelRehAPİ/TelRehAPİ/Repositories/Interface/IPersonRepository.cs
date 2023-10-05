using TelRehAPİ.Model.Domain;

namespace TelRehAPİ.Repositories.Interface
{
    public interface IPersonRepository
    {
        Task<KisiOz> CreateAsync(KisiOz Person);

        Task<IEnumerable<KisiOz>> GetAllAsync();

        Task<KisiOz?> GetById(Guid id);

        Task<KisiOz?> UpdateAsync(KisiOz Person);

        Task<KisiOz?> DeleteAsync(Guid id);
    }
}
