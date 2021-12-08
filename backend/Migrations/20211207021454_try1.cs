using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApp.Migrations
{
    public partial class try1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7668732f-e4ab-4ded-ac08-345a7d4a0843", "AQAAAAEAACcQAAAAELko0KDt65HKaB3G6zXGEjcR6EOTKik8U2C+Oj3VfdglJ/QXQC7zfLnZv4FlAdwXNQ==", "cce5e956-4226-4f86-ad83-782790c17d28" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "382824be-f2b7-4fe9-b61f-ab16299292cd", "AQAAAAEAACcQAAAAEOistooPn+tORokNYcTIoZlt+ecuo4BRZEgzOka1ebnPV+mIaeoUEBpy6WyLrb/67Q==", "51f0f48f-518d-4768-ba67-c8b171a52bc1" });
        }
    }
}
