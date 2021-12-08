using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data;
using TodoApp.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class PublicsController : ControllerBase
  {
    private readonly ApiDbContext _context;

    public PublicsController(ApiDbContext context)
    {
      _context = context;
    }
    // POST api/<PublicsController>
    [Route("api/[controller]/[action]/execute")]
    [HttpPost]
    public async Task<ActionResult<Customer>> PostMultipleCustomer(List<Customer> customers)
    {
      foreach (Customer c in customers)
      {
        _context.Customer.Add(c);

      }
      await _context.SaveChangesAsync();

      return NoContent();
    }
    // POST api/<PublicsController>
    [Route("api/[controller]/[action]/execute")]
    [HttpPost]
    public async Task<ActionResult<Customer>> PostMultipleImages(List<Image> images)
    {
      foreach (Image i in images)
      {
        _context.Image.Add(i);

      }
      await _context.SaveChangesAsync();

      return NoContent();
    }
  }
}
