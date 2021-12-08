using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class Customer: BaseEntity
  {
    [StringLength(55)]
    public String Name { get; set; }
    [StringLength(100)]
    public String Email { get; set; }
    public String Phone { get; set; }
    public String PhoneAdditional { get; set; }
    public bool Active { get; set; }
    public virtual ICollection<Schedule> Schedules { get; set; }


  }
}
