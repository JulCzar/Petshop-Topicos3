using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApp.Migrations
{
    public partial class updateModels3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Attendances",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b6988b90-1628-42a4-b68b-bbb3216982f1", "AQAAAAEAACcQAAAAEB079xDnJuDnWeII6DXBuUM8+QOxYuSqEsrW9w7q59XkCoxLOgL22NXeE17I4c8kNA==", "3445a4c9-e533-4258-97aa-ef2f02c0bf7c" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Attendances");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7668732f-e4ab-4ded-ac08-345a7d4a0843", "AQAAAAEAACcQAAAAELko0KDt65HKaB3G6zXGEjcR6EOTKik8U2C+Oj3VfdglJ/QXQC7zfLnZv4FlAdwXNQ==", "cce5e956-4226-4f86-ad83-782790c17d28" });
        }
    }
}
