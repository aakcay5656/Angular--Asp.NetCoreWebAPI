using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TelRehAPİ.Data;
using TelRehAPİ.Model.Domain;
using TelRehAPİ.Model.DTO;
using TelRehAPİ.Repositories.Interface;

namespace TelRehAPİ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TellRehController : ControllerBase
    {
        private readonly IPersonRepository personRepository;

        public TellRehController(IPersonRepository personRepository) 
        {
            this.personRepository = personRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePerson([FromBody]CreatePersonRequestDto request)
        {
            var person = new KisiOz
            {
                Name = request.Name,
                Tell = request.Tell,
            };

           await personRepository.CreateAsync(person);

            var response = new PersonDto
            {
                Id = person.Id,
                Name = person.Name,
                Tell = person.Tell
            };

            return Ok(response);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllPerson()
        {
            var kisiOz= await personRepository.GetAllAsync();

            var response=new List<PersonDto>();
            foreach (var person in kisiOz)
            {
                response.Add(new PersonDto
                {
                    Id=person.Id,
                    Name = person.Name,
                    Tell = person.Tell
                });
            }
            return Ok(response);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetPersonById([FromRoute] Guid id)
        {
            var existingPerson= await personRepository.GetById(id);

            if (existingPerson is null)
            {
               return NotFound();
            }

            var response = new PersonDto
            {
                Id = existingPerson.Id,
                Name = existingPerson.Name,
                Tell = existingPerson.Tell
            };
            return Ok(response);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> EditPerson([FromRoute] Guid id,UpdatePersonRequestDto request)
        {
            var person = new KisiOz
            {
                Id = id,
                Name = request.Name,
                Tell = request.Tell
            };

            person =await personRepository.UpdateAsync(person);
            if (person==null)
            {
                return NotFound();
            }
            var response = new PersonDto
            {
                Id = person.Id,
                Name = person.Name,
                Tell = person.Tell

            };
            return Ok(response);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletePerson([FromRoute] Guid id){
            var person= await personRepository.DeleteAsync(id);
            if (person is null)
            {
                return NotFound();
            }

            var response = new PersonDto
            {
                Id = person.Id,
                Name = person.Name,
                Tell = person.Tell
            };
            return Ok(response);
        }

        }
    }

