using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
  public class BaseEntity
  {
    public int Id { get; set; }
    public DateTime? CreatedDate { get; set; }
    public DateTime? UpdatedDate { get; set; }
    public BaseEntity()
    {
      UpdatedDate = DateTime.Now;
      CreatedDate ??= UpdatedDate;
    }

  }
}
