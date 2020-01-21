namespace FlashCard.Data.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string QuestionText { get; set; }
        public string Subject { get; set; }
        public int Difficulty { get; set; }
        public string Answer { get; set; }
    }
}