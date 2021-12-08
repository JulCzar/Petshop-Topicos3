using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Data;
using TodoApp.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace TodoApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class SchedulesController : ControllerBase
  {
    private readonly ApiDbContext _context;

    public SchedulesController(ApiDbContext context)
    {
      _context = context;
    }

    // GET: api/Schedules
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Schedule>>> GetSchedule()
    {
      return await _context.Schedule.ToListAsync();
    }

    // GET: api/Schedules/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Schedule>> GetSchedule(int id)
    {
      var schedule = await _context.Schedule.Include(b => b.Customer).Include(b => b.Address).Include(b => b.ScheduleType).Where(b => b.Id == id).Select(o => new Schedule()
      {
        Id = o.Id,
        Title = o.Title,
        Price = o.Price,
        Date = o.Date,
        ScheduleTypeId = o.ScheduleTypeId,
        CustomerId = o.CustomerId,
        AddressId = o.AddressId,
        Description = o.Description,
        Customer = o.Customer,
        Address = o.Address,
        ScheduleType = o.ScheduleType,
        Images = o.Images.Select(ot => ot).ToList()
      }).FirstOrDefaultAsync();

      if (schedule == null)
      {
        return NotFound();
      }

      return schedule;
    }

    // PUT: api/Schedules/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutSchedule(int id, Schedule schedule)
    {
      if (id != schedule.Id)
      {
        return BadRequest();
      }

      _context.Entry(schedule).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ScheduleExists(id))
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

    // POST: api/Schedules
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Schedule>> PostSchedule(Schedule schedule)
    {
      _context.Schedule.Add(schedule);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSchedule", new { id = schedule.Id }, schedule);
    }

    // DELETE: api/Schedules/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSchedule(int id)
    {
      var schedule = await _context.Schedule.FindAsync(id);
      if (schedule == null)
      {
        return NotFound();
      }

      _context.Schedule.Remove(schedule);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool ScheduleExists(int id)
    {
      return _context.Schedule.Any(e => e.Id == id);
    }
  }
}
