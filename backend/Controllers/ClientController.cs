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

namespace backendPetshop.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ClientController : ControllerBase
  {
    private readonly ApiDbContext _context;

    public ClientController(ApiDbContext context)
    {
      _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Client>>> GetAll()
    {

      return await _context.Clients.ToListAsync();
    }
    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<Client>> Get(int id)
    {
      var client = await _context.Clients.FindAsync(id);

      if (client == null)
      {
        return NotFound();
      }

      return client;
    }

    // POST action
    [HttpPost]
    public async Task<IActionResult> Create(Client client)
    {
      _context.Clients.Add(client);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSchedule", new { id = client.Id }, client);
    }

    // PUT action
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Client pet)
    {
      pet.Id = id;
      _context.Entry(pet).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ClientExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // DELETE action
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      var pet = await _context.Clients.FindAsync(id);
      if (pet == null)
      {
        return NotFound();
      }

      _context.Clients.Remove(pet);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool ClientExists(int id)
    {
      return _context.Clients.Any(e => e.Id == id);
    }
  }
}