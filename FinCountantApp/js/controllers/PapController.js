/* Setup blank page controller */
angular.module('MetronicApp').controller('PapController', ['$http', '$rootScope', '$scope', 'settings', 'paymentService', 'transactService', 'PoService',
    function ($http, $rootScope, $scope, settings, paymentService, transactService, PoService) {
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initAjax();

            // set default layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;
        });

        //variable declaration

        $scope.transact = {};
        $scope.payment = {};
        $scope.po = {};

        //auto selected analysis codes

        $scope.tinvoiceNoData = true;
        $scope.trateData = true;
        $scope.tcustomerData = true;
        $scope.temployeeData = true;

        //Amount incl tax maker

        function AmtIncTx() {
            var result =
                parseInt($scope.transact.amountExTax) +
                parseInt($scope.transact.federalExciseDuty) +
                parseInt($scope.transact.gst) +
                parseInt($scope.transact.advanceTax);
            $scope.transact.amountInTax = result;
            $scope.transact.TotalAmount = result;
        }

        //Total amount Calculator

        $scope.tifQtyChange = function () {
            $scope.tamountTcMaker();
            $scope.tExRate();
            AmtIncTx();
        }
        $scope.tamountTcMaker = function () {
            var result = $scope.transact.rate * $scope.transact.qty;
            $scope.transact.amountTc = result;
            $scope.tExRate();
            AmtIncTx();
        }
        $scope.tExRate = function () {
            var result = $scope.transact.amountTc * $scope.transact.exchangeRate;
            $scope.transact.amountExTax = result;
            AmtIncTx();
        }

        $scope.currencySelect = function (currency) {
            if (currency == "PKR") {
                $scope.transact.exchangeRate = 1;
                $scope.tExRate();
                AmtIncTx();
            }
            else {
                $scope.transact.exchangeRate = 105.05;
                $scope.tExRate();
                AmtIncTx();
            }
        }

        $scope.tFdExdChg = function (fed) {
            $scope.transact.TotalFED = fed;
            AmtIncTx();
        }
        $scope.tGstChg = function (gst) {
            $scope.transact.TotalGST = gst;

            AmtIncTx();
        }
        $scope.tAdvTxChg = function (advTx) {
            $scope.transact.TotalAdvTax = advTx;

            AmtIncTx();
        }


        //pushing data in dropdowns

        $scope.people = [{
            name: 'Adam',
            email: 'adam@email.com',
            age: 12,
            country: 'United States'
        }, {
            name: 'Amalie',
            email: 'amalie@email.com',
            age: 12,
            country: 'Argentina'
        }];

        $scope.pSupplierList = [
            {
                name: 'Dell',
                value: 'dell'
            },
            {
                name: 'Lenovo',
                value: 'lenovo'
            },
            {
                name: 'HP',
                value: 'hp'
            },
            {
                name: 'Sony',
                value: 'sony'
            }
        ];
        $scope.payment.Supplier = $scope.pSupplierList[0].value;

        $scope.PoSupplierList = [
            {
                name: 'Dell',
                value: 'dell'
            },
            {
                name: 'Lenovo',
                value: 'lenovo'
            },
            {
                name: 'HP',
                value: 'hp'
            },
            {
                name: 'Sony',
                value: 'sony'
            }
        ];
        $scope.po.Supplier = $scope.PoSupplierList[0].value;


        //$scope.btnSelector = function (btnData) {
        //    if ('add new btn' == btnData) {
        //        // window.location.href = "#";
        //    }
        //}
        $scope.tTrTypeList = [
            {
                name: 'Account Payable',
                value: 'Account Payable'
            },
            {
                name: 'Immediate Payment',
                value: 'Immediate Payment'
            }
        ];

        $scope.transact.TrType = $scope.tTrTypeList[0].value;
        $scope.tCurrencyList = [
            {
                name: 'PKR',
                value: 'PKR'

            },
            {
                name: 'USD',
                value: 'USD'
            }
        ];

        $scope.transact.currency = $scope.tCurrencyList[0].value;
        $scope.tNatureList = [

            {
                name: 'Computer & IT',
                value: 'Computer & IT'
            },
            {
                name: 'Utilities',
                value: 'utilities'
            },
            {
                name: 'Rent',
                value: 'rent'
            }
        ];
        $scope.transact.Nature = $scope.tNatureList[0].value;

        $scope.tSupplierList = [
            {
                name: 'Dell',
                value: 'dell'
            },
            {
                name: 'Lenovo',
                value: 'lenovo'
            },
            {
                name: 'HP',
                value: 'hp'
            },
            {
                name: 'Sony',
                value: 'sony'
            }
        ];
        $scope.transact.Supplier = $scope.tSupplierList[0].value;
        $scope.tRespCenterList = [
            {
                name: 'Zavi',
                value: 'zavi'
            },
            {
                name: 'Ali',
                value: 'ali'
            },
            {
                name: 'Iqbal',
                value: 'iqbal'
            },
            {
                name: 'Ahmed',
                value: 'ahmed'
            }
        ];
        $scope.transact.RespCenter = $scope.tRespCenterList[0].value;

        $scope.PoRespCenterList = [
            {
                name: 'Zavi',
                value: 'zavi'
            },
            {
                name: 'Ali',
                value: 'ali'
            },
            {
                name: 'Iqbal',
                value: 'iqbal'
            },
            {
                name: 'Ahmed',
                value: 'ahmed'
            }
        ];
        $scope.po.RespCenter = $scope.PoRespCenterList[0].value;

        $scope.pPayTypeList = [
            {
                name: 'Cash',
                value: 'cash'
            },
            {
                name: 'Bank',
                value: 'bank'
            }
        ];
        $scope.payment.type = $scope.pPayTypeList[0].value;

        $scope.pTrTypeList = [
            {
                name: 'Pay Advance',
                value: 'pay advance'
            },
            {
                name: 'Pay Invoice',
                value: 'pay invoice'
            },
            {
                name: 'Pay Fine/Penalties',
                value: 'pay fine or penalties'
            },
            {
                name: 'Pre Payment',
                value: 'pre payment'
            }
        ];
        $scope.payment.TrTypeOption = $scope.pTrTypeList[0].value;

        $scope.pRespCenterList = [
            {
                name: 'Zavi',
                value: 'zavi'
            },
            {
                name: 'Ali',
                value: 'ali'
            },
            {
                name: 'Iqbal',
                value: 'iqbal'
            },
            {
                name: 'Ahmed',
                value: 'ahmed'
            }
        ];
        $scope.payment.RespCenter = $scope.pRespCenterList[0].value;

        //Tables Naming and Manipulation
        $scope.TableNames = [
            "requisitionNoData"
            , "productData"
            , "descriptionData"
            , "amountData"
            , "qtyData"
            , "UomData"
            , "rateData"
            , "amountTcData"
            , "exchangeRateData"
            , "amountLcData"
            , "customerData"
            , "employeeData"
            , "shareholderData"
            , "beneficiaryDepData"
            , "regionData"
            , "companyData"
            , "businessLineData"
            , "projectData"
        ];

        $scope.tTableNames = ["tinvoiceNoData"
            , "tpurchaseOrderData"
            , "tproductData"
            , "tdescriptionData"
            , "tqtyData"
            , "tUomData"
            , "trateData"
            , "tamountTcData"
            , "texchangeRateData"
            , "tamountExTaxData"
            , "tfederalExciseDutyData"
            , "tgstData"
            , "tadvanceTaxData"
            , "tamountInTaxData"
            , "temployeeData"
            , "tshareholderData"
            , "tbeneficiaryDepartmentData"
            , "tregionData"
            , "tcompanyData"
            , "tbusinessLineData"
            , "tprojectData"
        ];
        $scope.pTableNames = [
            { "name": "Invoice", "data": "pinvoiceData", "vrb": "pinvoiceV" }
            , { "name": "Purchase Order", "data": "ppurchaseOrderData", "vrb": "pinvoiceV" }
            , { "name": "Product", "data": "pproductData", "vrb": "pinvoiceV" }
            , { "name": "Description", "data": "pdescriptionData", "vrb": "pinvoiceV" }
            , { "name": "Quantity", "data": "pqtyData", "vrb": "pinvoiceV" }
            , { "name": "UOM", "data": "pUomData", "vrb": "pinvoiceV" }
            , { "name": "Rate", "data": "prateData", "vrb": "pinvoiceV" }
            , { "name": "Gross Amount Discount", "data": "pgrossAmountData", "vrb": "pinvoiceV" }
            , { "name": "Discount", "data": "pdiscountData", "vrb": "pinvoiceV" }
            , { "name": "Net Amount(FC)", "data": "pnetamountTcData", "vrb": "pinvoiceV" }
            , { "name": "Exchage Rate", "data": "pexchangeRateData", "vrb": "pinvoiceV" }
            , { "name": "Net Amount(Lc) Excl. Tax", "data": "pnetAmountLcExTaxData", "vrb": "pinvoiceV" }
            , { "name": "Withholding Tax", "data": "pwithHoldingTaxData", "vrb": "pinvoiceV" }
            , { "name": "Amount Paid(LC)", "data": "pamountPaidLcData", "vrb": "pinvoiceV" }
            , { "name": "Bank Account No", "data": "pbankAccountNoData", "vrb": "pinvoiceV" }
            , { "name": "Customer", "data": "pcustomerData", "vrb": "pinvoiceV" }
            , { "name": "Employee", "data": "pemployeeData", "vrb": "pinvoiceV" }
            , { "name": "Shareholder", "data": "pshareholderData", "vrb": "pinvoiceV" }
            , { "name": "Beneficiary Department", "data": "pbeneficiaryDepartmentData", "vrb": "pinvoiceV" }
            , { "name": "Region", "data": "pregionData", "vrb": "pinvoiceV" }
            , { "name": "Company", "data": "pcompanyData", "vrb": "pinvoiceV" }
            , { "name": "Business Line", "data": "pbusinessLineData", "vrb": "pinvoiceV" }
            , { "name": "Project", "data": "pprojectData", "vrb": "pinvoiceV" }
        ];


        //payment form submission
        $scope.paymentForm = function () {
            paymentService.addPaymentToDB($scope.payment);

        }

        //transactoin form submission
        $scope.transactForm = function () {
            //  transactService.addTransactToDB($scope.transact);

            $http.post('/api/Transaction/AddTransaction', $scope.transact)
                .then(function (response) {
                    $scope.transact = {};
                    alert(response.data);

                }).catch(function (response) {
                    console.log(response.status);
                    alert("Something is wrong");
                });
        }

        //purchase order form submission
        //$scope.transactForm = function () {
        //    PoService.addPoToDB($scope.po);
        //}

        $scope.PoTables = [
            new String('po 1')];

        // PO Table extending control
        $scope.POBtn = function () {
            var c = $scope.PoTables.length + 1;
            var item = new String('po ' + c)
            $scope.PoTables.push(item);
        }
        $scope.TRecordingTables = [
            new String('to 1')];

        //Transaction Table extending control
        $scope.TRecordingBtn = function () {
            var c = $scope.TRecordingTables.length + 1;
            var item = new String('to ' + c)
            $scope.TRecordingTables.splice(0, 0, item);
        }
        $scope.PaymentTables = [
            new String('pay 1')];

        //Payment Table extending control
        $scope.paymentBtn = function () {
            var c = $scope.PaymentTables.length + 1;
            var item = new String('pay ' + c)
            $scope.PaymentTables.splice(0, 0, item);
        }

        //Po Table removing control

        $scope.removeTable = function (table) {
            var index = $scope.PoTables.indexOf(table);
            $scope.PoTables.splice(index, 1);
        }

        //Transaction Table extending control

        $scope.removeTRTable = function (table) {
            var index = $scope.TRecordingTables.indexOf(table);
            $scope.TRecordingTables.splice(index, 1);
        }

        //Payment Table extending control

        $scope.removePayTable = function (table) {
            var index = $scope.PaymentTables.indexOf(table);
            $scope.PaymentTables.splice(index, 1);
        }
    }]).factory("paymentService", ["$http", function ($http) {
        fac = {};

        fac.addPaymentToDB = function (payment) {
            $http.post('/api/Payment/AddPayment', payment)
                .then(function (response) {

                    alert(" Payment data added successfully into FinCountant Database");

                }).catch(function (response) {
                    console.log(response.status);
                    alert("Something is wrong");
                });
        }
        return fac;
    }]).factory("transactService", ["$http", function ($http) {
        fac = {};

        fac.addTransactToDB = function (transact) {
            $http.post('/api/Transaction/AddTransaction', transact)
                .then(function (response) {
                    alert("Transaction data added successfully into FinCountant Database");

                }).catch(function (response) {
                    console.log(response.status);
                    alert("Something is wrong");
                });

        }
        return fac;
    }]).factory("PoService", ["$http", function ($http) {
        fac = {};

        fac.addPoToDB = function (po) {
            $http.post('/api/Po/AddPo', po)
                .then(function (response) {
                    alert("Purchase order data added successfully into FinCountant Database");

                }).catch(function (response) {
                    console.log(response.status);
                    alert("Something is wrong");
                });
        }
        return fac;
    }]);






