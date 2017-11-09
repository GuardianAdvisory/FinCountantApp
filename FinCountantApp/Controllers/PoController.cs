using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FinCountantApp.DataModel;

namespace FinCountantApp.Controllers
{
    public class PoController : ApiController
    {
        // GET: api/Po
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Po/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Po
        public void AddPo(PoDataModel data)
        {
            //do stuff here
        }

        // PUT: api/Po/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Po/5
        public void Delete(int id)
        {
        }
    }
}
