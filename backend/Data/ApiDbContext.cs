using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TodoApp.Models;
using TodoApp.Models.DTOs.Requests;

namespace TodoApp.Data
{
  public class ApiDbContext : IdentityDbContext
  {
    public DbSet<Pet> Pets { get; set; }
    public DbSet<Client> Clients { get; set; }
    public DbSet<Attendances> Attendances { get; set; }
    public DbSet<ItemData> Items { get; set; }
    public DbSet<Customer> Customer { get; set; }
    public DbSet<Address> Address { get; set; }
    public DbSet<Image> Image { get; set; }
    public DbSet<ScheduleType> ScheduleType { get; set; }
    public DbSet<Schedule> Schedule { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      string ADMIN_ID = "02174cf0�9412�4cfe - afbf - 59f706d72cf6";
      string ROLE_ID = "341743f0 - asd2�42de - afbf - 59kmkkmk72cf6";

      //seed admin role
      modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
      {
        Name = "SuperAdmin",
        NormalizedName = "SuperAdmin",
        Id = ROLE_ID,
        ConcurrencyStamp = ROLE_ID
      });

      //create user
      var appUser = new IdentityUser
      {
        Id = ADMIN_ID,
        Email = "admin@gmail.com",
        EmailConfirmed = true,
        UserName = "Admin"
      };

      //set user password
      PasswordHasher<IdentityUser> ph = new();
      appUser.PasswordHash = ph.HashPassword(appUser, "$Admin1234");

      //seed user
      modelBuilder.Entity<IdentityUser>().HasData(appUser);

      //set user role to admin
      modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
      {
        RoleId = ROLE_ID,
        UserId = ADMIN_ID
      });

      modelBuilder.Entity<Image>()
          .HasOne<Schedule>(s => s.Schedule)
          .WithMany(g => g.Images)
          .HasForeignKey(s => s.ScheduleId);
      modelBuilder.Entity<Schedule>()
          .HasOne<Customer>(s => s.Customer)
          .WithMany(g => g.Schedules)
          .HasForeignKey(s => s.CustomerId);
      modelBuilder.Entity<Schedule>()
          .HasOne<Address>(s => s.Address)
          .WithMany(g => g.Schedules)
          .HasForeignKey(s => s.AddressId);
      modelBuilder.Entity<Schedule>()
          .HasOne<ScheduleType>(s => s.ScheduleType)
          .WithMany(g => g.Schedules)
          .HasForeignKey(s => s.ScheduleTypeId);
      modelBuilder.Entity<Customer>()
          .HasIndex(u => u.Email)
          .IsUnique();

      modelBuilder.Entity<Pet>().HasOne<Client>(p => p.Client).WithMany(c => c.Pets).HasForeignKey(p => p.ClientId);
      modelBuilder.Entity<Attendances>().HasOne<Pet>(a => a.Pet).WithMany(p => p.Attendances).HasForeignKey(a => a.PetId);
      modelBuilder.Entity<Client>().HasIndex(p => p.Email).IsUnique();
    }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken token = default)
    {
      foreach (var entity in ChangeTracker
          .Entries()
          .Where(x => x.Entity is BaseEntity && x.State == EntityState.Modified)
          .Select(x => x.Entity)
          .Cast<BaseEntity>())
      {
        entity.UpdatedDate = DateTime.Now;
      }

      return base.SaveChangesAsync(acceptAllChangesOnSuccess, token);
    }

    public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
    {
      Database.EnsureCreated();
    }

  }
}