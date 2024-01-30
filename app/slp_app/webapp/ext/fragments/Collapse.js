sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        collapse: function (oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
        },
        
    };
});
