sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'slpnamespace/slpapp/test/integration/FirstJourney',
		'slpnamespace/slpapp/test/integration/pages/SupplierMain'
    ],
    function(JourneyRunner, opaJourney, SupplierMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('slpnamespace/slpapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSupplierMain: SupplierMain
                }
            },
            opaJourney.run
        );
    }
);