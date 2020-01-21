using FlashCard.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace FlashCard.Data
{
    public class FlashCardDbContext : DbContext
    {
        public DbSet<Question> Questions { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("server=localhost;database=postgres;user id=postgres;password=postgres");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          // modelBuilder.HasSequence<int>("MessageId").StartsAt(3).IncrementsBy(1);
          // modelBuilder.Entity<Message>(o => o.HasKey(k => k.MessageId));
          // modelBuilder.Entity<Message>().Property(p => p.MessageId).HasDefaultValueSql("nextval('\"MessageId\"')");

            modelBuilder.HasSequence<int>("QuestionId").StartsAt(2).IncrementsBy(1);
            modelBuilder.Entity<Question>(o => o.HasKey(k => k.QuestionId));
            modelBuilder.Entity<Question>().Property(p => p.QuestionId).HasDefaultValueSql("nextval('\"QuestionId\"')");

            modelBuilder.Entity<Question>().HasData(new Question() 
            {
                QuestionId = 1,
                QuestionText = "This is a test question",
                Subject = "Test Subject",
                Difficulty = 1,
                Answer = "Test Answer"
            });
        }
    }
}