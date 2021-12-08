using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models {
  public class Pet : BaseEntity {
    public string Name { get; set; }
    public string Breed { get; set; }
    public DateTime Birthdate { get; set; }
    public double Weight { get; set; }
    public string Observations { get; set; }
    public int? ClientId { get; set; }
    public virtual Client Client { get; set; }
    public virtual ICollection<Attendances> Attendances { get; set; }
  }
}