using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data;
using TodoApp.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace backendPetshop.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class AttendanceController : ControllerBase
  {
    private readonly ApiDbContext _context;

    public AttendanceController(ApiDbContext context)
    {
      _context = context;
    }

    // GET all action
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Attendances>>> GetAll() => await _context.Attendances.ToListAsync();
    // GET by Id action
    [HttpGet("{id}")]
    public async Task<ActionResult<Attendances>> Get(int id)
    {
      var attendance = await _context.Attendances.FindAsync(id);

      if (attendance == null)
      {
        return NotFound();
      }

      return attendance;
    }

    // POST action
    [HttpPost]
    public async Task<IActionResult> Create(Attendances attendance)
    {
      _context.Attendances.Add(attendance);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSchedule", new { id = attendance.Id }, attendance);
    }

    // PUT action
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Attendances attendance)
    {
      attendance.Id = id;
      _context.Entry(attendance).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AttendanceExists(id))
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
      var attendance = await _context.Attendances.FindAsync(id);
      if (attendance == null)
      {
        return NotFound();
      }

      _context.Attendances.Remove(attendance);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool AttendanceExists(int id)
    {
      return _context.Attendances.Any(a => a.Id == id);
    }
  }
}