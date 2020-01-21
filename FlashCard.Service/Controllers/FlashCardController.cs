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
          return await Task.FromResult(Ok(_db.Questions.ToList()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCard(int id)
        {
          Question q = _db.Questions.Where(q => q.QuestionId == id).FirstOrDefault();
          if(q != null)
          {
            _db.Questions.Remove(q);
            _db.SaveChanges();
            return await Task.FromResult(Ok(_db.Questions.FirstOrDefault(q => q.QuestionId == id)));
          }
          return await Task.FromResult(BadRequest($"Card #{id} not found"));
        }
        [HttpPost]
        public async Task<IActionResult> Post(Question q)
        {
          if(ModelState.IsValid)
          {
            _db.Questions.Add(q);
            _db.SaveChanges();
            return await Task.FromResult(Ok(q));
          }
          return await Task.FromResult(BadRequest(q));
        }
        [HttpPost("{id}")]
        public async Task<IActionResult> DeleteCard(int id)
        {
          Question q = _db.Questions.Where(q => q.QuestionId == id).FirstOrDefault();
          if(q != null)
          {
            _db.Questions.Remove(q);
            _db.SaveChanges();
            return await Task.FromResult(Ok($"Deleted card #{id}"));
          }
          return await Task.FromResult(BadRequest($"Card #{id} not found"));
        }
    }
}