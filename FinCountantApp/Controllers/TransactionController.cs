using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinCountantApp.Controllers
{
    public class TransactionController : ApiController
    {
        private string GetConnectionString()
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["FinDBString"].ConnectionString;
        }
        // GET: api/Transaction
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Transaction/5
        public string Get(int id)
        {
            return "value";
        }

        //Transaction Recording
        [HttpPost]
        [ActionName("AddTransaction")]
        public string AddTransaction(DataModel.TransactionDataModel data)
        {

            string result = "Duplicate Record";

            if (ModelState.IsValid)
            {
                SqlConnection conn = new SqlConnection(GetConnectionString());
                conn.Open();
                SqlCommand cmd1 = new SqlCommand("Select * From TRANSACTIONS where invoiceId=@id", conn);
                cmd1.Parameters.AddWithValue("@id", data.invoice);
                SqlDataAdapter sda = new SqlDataAdapter(cmd1);
                DataTable dt = new DataTable();
                sda.Fill(dt);
                if (dt.Rows.Count < 1)
                {
                    int i;
                    for (i = 0; i <= 1; i++)
                    {
                        string mainHead = null;
                        int Cr = 0;
                        int Dr = 0;
                        SqlCommand cmd = new SqlCommand("insert into " +
                            "TRANSACTIONS (invoiceId,Date,Employee,Supplier,Customer,Description,MainHead,SubHead,Dr,Cr,Net)" +
                            " values(@inv,@Date,@Emp,@Sup,@Cust,@Desc,@MH,@SH,@Dr,@Cr,@Net)", conn);
                        cmd.Parameters.AddWithValue("@inv", data.invoice);
                        cmd.Parameters.AddWithValue("@Date", "07/Nov/17");
                        cmd.Parameters.AddWithValue("@Emp", data.employee);
                        cmd.Parameters.AddWithValue("@Sup", data.Supplier);
                        cmd.Parameters.AddWithValue("@Cust", data.customer);
                        cmd.Parameters.AddWithValue("@Desc", data.description);
                        if (i == 0)
                        {
                            mainHead = "Account Payables";
                            Cr = data.TotalAmount;
                        }
                        else
                        {
                            mainHead = "Computer & IT";
                            Dr = data.TotalAmount;
                        }
                        cmd.Parameters.AddWithValue("@MH", mainHead);
                        cmd.Parameters.AddWithValue("@SH", " ");
                        cmd.Parameters.AddWithValue("@Cr", Cr);
                        cmd.Parameters.AddWithValue("@Dr", Dr);
                        cmd.Parameters.AddWithValue("@Net", data.TotalAmount);
                        cmd.ExecuteNonQuery();
                        
                    }
                    conn.Close();
                    result = "Record Added";
                }
                else
                {
                    conn.Close();
                }
            }
            return result;
      
        }

        // PUT: api/Transaction/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Transaction/5
        public void Delete(int id)
        {
        }
    }
}
