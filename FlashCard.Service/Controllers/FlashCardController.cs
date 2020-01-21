using System.Linq;
using System.Threading.Tasks;
using FlashCard.Data;
using Microsoft.AspNetCore.Mvc;

namespace FlashCard.Service.Controllers
{
    [Produces("application/json")]
    [Route("/app/[controller]")]
    [ApiController]
    public class FlashCardController : ControllerBase
    {
        private readonly FlashCardDbContext _db;

        public FlashCardController(FlashCardDbContext dbContext)
        {
            _db = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return await Task.FromResult(Ok(_db.Questions.FirstOrDefault(q => q.QuestionId == id)));
        }
    }
}