using System.ComponentModel.DataAnnotations;

namespace FlashCard.Data.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        [Required]
        [MaxLength(250)]
        public string QuestionText { get; set; }
        [Required]
        [MaxLength(25)]
        public string Subject { get; set; }
        [Required]
        [RegularExpression("([0-9]+)", ErrorMessage = "Please enter valid Number")]
        public int Difficulty { get; set; }
        [Required]
        [MaxLength(250)]
        public string Answer { get; set; }
    }
}