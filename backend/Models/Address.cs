using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class Address: BaseEntity
  {
    public string Name { get; set; }
    public string District { get; set; }
    public string FullAddress { get; set; }
    public bool Active { get; set; }
    public virtual ICollection<Schedule> Schedules { get; set; }

  }
}
