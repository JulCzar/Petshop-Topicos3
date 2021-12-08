namespace TodoApp.Models
{
    public class ItemData: BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
    }
}