sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/employees/employeecrudui/test/integration/pages/EmployeesList",
	"com/employees/employeecrudui/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/employees/employeecrudui') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

