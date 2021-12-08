using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApp.Migrations
{
    public partial class updateModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAdmin",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Clients");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1acf22ec-ca21-46ed-b966-4d43e2451ad4", "AQAAAAEAACcQAAAAEED+HxJofp2t8ogf64ujh/je3YqwcieRGSZ+ur7K52xDv8jT8NkEn+cGtzLz4sodFQ==", "768c5ae5-0c9b-4789-b185-cb3ebdfdb6b8" });

            migrationBuilder.UpdateData(
                table: "Clients",
                keyColumn: "Id",
                keyValue: -1,
                columns: new[] { "CreatedDate", "UpdatedDate" },
                values: new object[] { new DateTime(2021, 12, 6, 9, 29, 16, 63, DateTimeKind.Local).AddTicks(1756), new DateTime(2021, 12, 6, 9, 29, 16, 63, DateTimeKind.Local).AddTicks(1756) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsAdmin",
                table: "Clients",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Clients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "02174cf0�9412�4cfe - afbf - 59f706d72cf6",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "28651d38-6e99-4a4d-826d-2db51a940deb", "AQAAAAEAACcQAAAAEAmQLVleo1P6N+0yVQYkMeuk6kHVjId0un1YfoAwM4eTj5N7sWFtxTEdZtZj8+nz5Q==", "2388c4c4-38b0-4d0c-affe-614fc73eeec2" });

            migrationBuilder.UpdateData(
                table: "Clients",
                keyColumn: "Id",
                keyValue: -1,
                columns: new[] { "CreatedDate", "IsAdmin", "Password", "UpdatedDate" },
                values: new object[] { new DateTime(2021, 12, 6, 0, 14, 13, 808, DateTimeKind.Local).AddTicks(4825), true, "AQAAAAEAACcQAAAAEIaDsPqrMs86zZdS0saRtqLQ/wyflnp+Jr4gqFAhy6B5S3Qxij5owGXgYUT21jhAOA==", new DateTime(2021, 12, 6, 0, 14, 13, 808, DateTimeKind.Local).AddTicks(4825) });
        }
    }
}
