using Microsoft.EntityFrameworkCore.Migrations;

namespace FlashCard.Data.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateSequence<int>(
                name: "QuestionId",
                startValue: 2L);

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    QuestionId = table.Column<int>(nullable: false, defaultValueSql: "nextval('\"QuestionId\"')"),
                    QuestionText = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true),
                    Difficulty = table.Column<int>(nullable: false),
                    Answer = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.QuestionId);
                });

            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "QuestionId", "Answer", "Difficulty", "QuestionText", "Subject" },
                values: new object[] { 1, "Test Answer", 1, "This is a test question", "Test Subject" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropSequence(
                name: "QuestionId");
        }
    }
}
