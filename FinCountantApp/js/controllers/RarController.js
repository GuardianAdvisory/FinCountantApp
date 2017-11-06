/* Setup Revenue And Receivable page controller */
angular.module('MetronicApp').controller('RarController', ['$rootScope', '$scope', 'settings', '$http', function ($rootScope, $scope, settings, $http) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });

    //pushing data in dropdown
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

    $scope.options = [
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
        },
        {
            name: 'Add New Name',
            value: 'add new btn'
        }
    ];
    $scope.selectedOption = $scope.options[0].value;

    $scope.btnSelector = function (btnData) {
        if ('add new btn' == btnData) {
            // window.location.href = "#";
        }
    }




    //Tables Naming and Manipulation
    $scope.TableNames = ["requisitionNoData"
        , "productData"
        , "descriptionData"
        , "amountData"
        , "qtyData"
        , "measuringScaleData"
        , "rateData"
        , "amountFcData"
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
        , "tmeasuringScaleData"
        , "trateData"
        , "tamountFcData"
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
        { "name": "Invoice", "data": "pinvoiceData" }
        , { "name": "Purchase Order", "data": "ppurchaseOrderData" }
        , { "name": "Product", "data": "pproductData" }
        , { "name": "Description", "data": "pdescriptionData" }
        , { "name": "Rate", "data": "prateData" }
        , { "name": "Gross Amount Discount", "data": "pgrossAmountData" }
        , { "name": "Discount", "data": "pdiscountData" }
        , { "name": "Net Amount(FC)", "data": "pnetAmountFcData" }
        , { "name": "Exchage Rate", "data": "pexchangeRateData" }
        , { "name": "Net Amount(Lc) Excl. Tax", "data": "pnetAmountLcExTaxData" }
        , { "name": "Advance Tax", "data": "padvanceTaxData" }
        , { "name": "Withholding Tax", "data": "pwithHoldingTaxData" }
        , { "name": "Amount Paid(LC)", "data": "pamountPaidLcData" }
        , { "name": "Bank Account No", "data": "pbankAccountNoData" }
        , { "name": "Customer", "data": "pcustomerData" }
        , { "name": "Employee", "data": "pemployeeData" }
        , { "name": "Shareholder", "data": "pshareholderData" }
        , { "name": "Beneficiary Department", "data": "pbeneficiaryDepartmentData" }
        , { "name": "Region", "data": "pregionData" }
        , { "name": "Company", "data": "pcompanyData" }
        , { "name": "Business Line", "data": "pbusinessLineData" }
        , { "name": "Project", "data": "pprojectData" }
    ];

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
    $scope.removeTable = function (table) {
        var index = $scope.PoTables.indexOf(table);
        $scope.PoTables.splice(index, 1);
    }
}]);
