using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class ScheduleType : BaseEntity
  {
    public String Title { get; set; }
    public String Description { get; set; }
    public bool Active { get; set; }
    public virtual ICollection<Schedule> Schedules { get; set; }

  }
}
