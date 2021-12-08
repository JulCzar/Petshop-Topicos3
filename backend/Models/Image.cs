using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
    public class Image: BaseEntity
    {
        public String Link { get; set; }
        public int? ScheduleId { get; set; }
        public virtual Schedule Schedule {get;set;}
    }
}
