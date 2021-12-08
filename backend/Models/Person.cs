using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class Person : BaseEntity
  {
    [StringLength(100)]
    public string Name { get; set; }
    [StringLength(100)]
    public string Email { get; set; }
    public string Cpf { get; set; }
    public string Rg { get; set; }
    public virtual ICollection<Pet> Pets { get; set; }
  }
}
