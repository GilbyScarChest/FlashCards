using System.Linq;
using System.Threading.Tasks;
using FlashCard.Data;
using Microsoft.AspNetCore.Mvc;
using FlashCard.Data.Models;

namespace FlashCard.Service.Controllers
{
    [Produces("application/json")]
    [Route("/app/[controller]/[action]")]
    [ApiController]
    public class FlashCardController : ControllerBase
    {
        private readonly FlashCardDbContext _db;

        public FlashCardController(FlashCardDbContext dbContext)
        {
            _db = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllCards()
        {
          // Question quest = new Question();
          // quest.QuestionId = 1;
          // quest.QuestionText = "Test Question?";
          // quest.Subject = "Test";
          // quest.Difficulty = 1;
          // quest.Answer = "Good";
          return await Task.FromResult(Ok(_db.Questions.ToList()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCard(int id)
        {
            return await Task.FromResult(Ok(_db.Questions.FirstOrDefault(q => q.QuestionId == id)));
        }
        [HttpPost]
        public async Task<IActionResult> Post(Question q)
        {
          _db.Questions.Add(q);
          _db.SaveChanges();
          return await Task.FromResult(Ok(q));
        }
    }
}