using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class Schedule: BaseEntity
  {
    public string Title { get; set; }
    public float Price { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public int ScheduleTypeId { get; set; }
    public int CustomerId { get; set; }
    public int AddressId { get; set; }
    public virtual ICollection<Image> Images { get; set; }
    public virtual ScheduleType ScheduleType { get; set; }
    public virtual Customer Customer { get; set; }
    public virtual Address Address { get; set; }
  }
}
