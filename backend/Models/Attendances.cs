using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class Attendances : BaseEntity
  {
    public string Name { get; set; }
    public string Details { get; set; }
    public string Value { get; set; }
    public int PetId { get; set; }
    public virtual Pet Pet { get; set; }
  }
}
