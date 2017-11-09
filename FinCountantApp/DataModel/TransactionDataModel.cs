using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinCountantApp.DataModel
{
    public class TransactionDataModel
    {

        public string TrType { get; set; }
        public string Nature { get; set; }
        public string Supplier { get; set; }
        public string TotalFED { get; set; }
        public string TotalGST { get; set; }
        public string RespCenter { get; set; }
        public string TotalAdvTax { get; set; }
        public int TotalAmount { get; set; }
        public string invoice { get; set; }
        public string purchaseOrder { get; set; }
        public string product { get; set; }
        public string description { get; set; }
        public string qty { get; set; }
        public string Uom { get; set; }
        public string rate { get; set; }
        public string grossAmount { get; set; }
        public string discount { get; set; }
        public string netAmountFc { get; set; }
        public string exchangeRate { get; set; }
        public string netAmountLcExTax { get; set; }
        public string withHoldingTax { get; set; }
        public string amountPaidLc { get; set; }
        public string customer { get; set; }
        public string employee { get; set; }
        public string shareholder { get; set; }
        public string beneficiaryDepartment { get; set; }
        public string region { get; set; }
        public string company { get; set; }
        public string businessLine { get; set; }
        public string project { get; set; }
    }
}