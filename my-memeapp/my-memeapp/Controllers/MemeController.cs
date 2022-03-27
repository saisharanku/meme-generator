using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using my_memeapp.Models;
using Microsoft.AspNetCore.Hosting;

namespace my_memeapp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MemeController : Controller
    {
     
        private readonly ILogger<MemeController> _logger;
        private readonly IWebHostEnvironment _hostEnvironment;
        private readonly MemeDatabaseContext _context;
        public MemeController(ILogger<MemeController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create()
        {         
            return View();
        }

    }
}
