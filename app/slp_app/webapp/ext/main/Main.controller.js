sap.ui.define(
    [
        'sap/fe/core/PageController',
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    function(PageController, Filter, FilterOperator) {
        'use strict';

        return PageController.extend('slpnamespace.slpapp.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
             onInit: function () {
                // debugger

                // this.getView().getContent()[0].getContent()[1].getColumns()[0].getTemplate().getItems()[1].setVisible(false);
            
             },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
            // collapse: function (oEvent) {
            //     debugger
            //     var tablehide = oEvent.getSource().getParent().getParent().getParent().getParent().getColumns()[0].getTemplate().getItems()[1];
            //     if (tablehide.getVisible()==true) {
            //         tablehide.setVisible(false);
                    
            //     }
            //     else
            //     {
            //         tablehide.setVisible(true);
            //     }

            
            // }
            onTableRowSelect: function (oEvent) {
                console.log("ola");
                var selectedRow = oEvent.getParameter("tasks");
            },
           

            onRowShiftAction: function (oEvent) {
                debugger
                var oSource = oEvent.getSource(),
                    oRow = oSource.getParent();
                    var inner_table  = oRow.getCells()[4];
                if (oSource.getSrc() === "sap-icon://expand") {
                    oSource.setSrc("sap-icon://collapse");
                    oRow.getCells()[4].setVisible(true);
                    
                    // oRow.getCells()[4].mAggregations.columns[0].setStyleClass("customclasscolorback")
                    oRow.addStyleClass("customclasscolorback");
                    // for (let i = 0; i < oRow.getCells().length-1; i++) {
                    //     oRow.getCells()[i].addStyleClass("customclasscolor")    
                    // }
                } else {
                    oSource.setSrc("sap-icon://expand");
                    oRow.getCells()[4].setVisible(false);
                    // for (let i = 0; i < oRow.getCells().length-1; i++) {
                    //     oRow.getCells()[i].removeStyleClass("customclasscolor")
                    // }
                    oRow.removeStyleClass("customclasscolorback");
                }
            },

           
            

            onFilterPosts: function (oEvent) {
                debugger
                var sValue = oEvent.getParameter("query");
                var oFilter1 = new Filter("supplier_name", FilterOperator.Contains, sValue); // Adjust property name accordingly
                var oFilter2 = new Filter("sm_id", FilterOperator.Contains, sValue); // Adjust property name accordingly
                var oFilter3 = new Filter("erp_vendor_code", FilterOperator.Contains, sValue); // Adjust property name accordingly
                var oCombinedFilter = new Filter({filters: [oFilter1, oFilter2,oFilter3],and: false });
                var oTable = this.getView().byId("tab1");
                var oBinding = oTable.getBinding("items");
                oBinding.filter([oCombinedFilter]);
              }
        });
    }
);
