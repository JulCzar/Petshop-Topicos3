using Microsoft.AspNetCore.Identity;
using TodoApp.Configuration;

namespace TodoApp.Models.DTOs.Responses
{
    public class RegistrationResponse : AuthResult
    {
        public IdentityUser User { get; set; }   
    }
}