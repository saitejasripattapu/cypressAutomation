const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '104'
        },
        device: 'Local test machine',
        platform: {
            name: 'Mac Os',
            version: '12.3'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Sept1 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Sept1 2022, 02:35ß PM EST'}
        ]
    }
});