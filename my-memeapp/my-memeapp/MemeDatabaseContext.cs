using Microsoft.EntityFrameworkCore;
using my_memeapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_memeapp
{
    public class MemeDatabaseContext:DbContext
    {
        public MemeDatabaseContext(DbContextOptions<MemeDatabaseContext> options) : base(options)
        { }

        public DbSet<ImageEntity> Images { get; set; }
    }
}
