using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinCountantApp.DataModel
{
    public class PoDataModel
    {
        public string requisitionNo { get; set; }
        public string product { get; set; }
        public string description { get; set; }
        public string amount { get; set; }
        public string qty { get; set; }
        public string Uom { get; set; }
        public string rate { get; set; }
        public string amountFc { get; set; }
        public string exchangeRate { get; set; }
        public string amountLc { get; set; }
        public string customer { get; set; }
        public string employee { get; set; }
        public string shareholder { get; set; }
        public string beneficiaryDep { get; set; }
        public string region { get; set; }
        public string company { get; set; }
        public string businessLine { get; set; }
        public string project { get; set; }
    }
}