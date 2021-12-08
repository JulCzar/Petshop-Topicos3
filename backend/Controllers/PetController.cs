using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data;
using TodoApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace backendPetshop.Controllers {
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class PetController : ControllerBase {
    private readonly ApiDbContext _context;

    public PetController(ApiDbContext context) {
      _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pet>>> GetAll() {

      return await _context.Pets.ToListAsync();
    }
    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<Pet>> Get(int id) {
      var pet = await _context.Pets.FindAsync(id);

      if (pet == null) {
        return NotFound();
      }

      return pet;
    }

    // POST action
    [HttpPost]
    public async Task<IActionResult> Create(Pet pet) {
      _context.Pets.Add(pet);
      await _context.SaveChangesAsync();

      Console.WriteLine(pet);
      return CreatedAtAction("GetPets", new { id = pet.Id }, pet);
    }

    // PUT action
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Pet pet) {
      pet.Id = id;
      _context.Entry(pet).State = EntityState.Modified;

      try {
        await _context.SaveChangesAsync();
      } catch (DbUpdateConcurrencyException) {
        if (!PetExists(id)) {
          return NotFound();
        } else {
          throw;
        }
      }

      return NoContent();
    }

    // DELETE action
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) {
      var pet = await _context.Pets.FindAsync(id);
      if (pet == null) {
        return NotFound();
      }

      _context.Pets.Remove(pet);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool PetExists(int id) {
      return _context.Pets.Any(e => e.Id == id);
    }
  }
}