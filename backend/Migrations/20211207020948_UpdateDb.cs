using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApp.Migrations
{
    public partial class UpdateDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Clients",
                keyColumn: "Id",
                keyValue: -1);

            migrationBuilder.AddColumn<string>(
                name: "Cpf",
                table: "Clients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Rg",
                table: "Clients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "382824be-f2b7-4fe9-b61f-ab16299292cd", "AQAAAAEAACcQAAAAEOistooPn+tORokNYcTIoZlt+ecuo4BRZEgzOka1ebnPV+mIaeoUEBpy6WyLrb/67Q==", "51f0f48f-518d-4768-ba67-c8b171a52bc1" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cpf",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Rg",
                table: "Clients");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1acf22ec-ca21-46ed-b966-4d43e2451ad4", "AQAAAAEAACcQAAAAEED+HxJofp2t8ogf64ujh/je3YqwcieRGSZ+ur7K52xDv8jT8NkEn+cGtzLz4sodFQ==", "768c5ae5-0c9b-4789-b185-cb3ebdfdb6b8" });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "Id", "Birthdate", "CreatedDate", "Email", "Name", "UpdatedDate" },
                values: new object[] { -1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 12, 6, 9, 29, 16, 63, DateTimeKind.Local).AddTicks(1756), "admin@admin.com", "Admin", new DateTime(2021, 12, 6, 9, 29, 16, 63, DateTimeKind.Local).AddTicks(1756) });
        }
    }
}
