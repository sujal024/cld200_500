sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/employee/customercrudui/test/integration/pages/CustomersList",
	"com/employee/customercrudui/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/employee/customercrudui') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

