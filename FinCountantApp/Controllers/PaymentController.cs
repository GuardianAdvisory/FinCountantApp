﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinCountantApp.Controllers
{
    public class PaymentController : ApiController
    {
        private string GetConnectionString()
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["FinDBString"].ConnectionString;
        }
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "iqbal", "value2" };
        }

        [HttpPost]
        [ActionName("AddPayment")]

        public void AddPayment(DataModel.PaymentDataModel data)
        {
            SqlConnection conn = new SqlConnection(GetConnectionString());
            conn.Open();
            SqlCommand cmd = new SqlCommand("insert into CASH_PAYMENTS (CashPaymentID,Desciption,Net) values(@CPId,@Desc,@Net)", conn);
           // cmd.Parameters.AddWithValue("@Desc", );
          //  cmd.Parameters.AddWithValue("@Net", data.testData);
            cmd.ExecuteNonQuery();
            conn.Close();
        }
      
        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        //public void Post([FromBody]string value)
        //{
        //}

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
