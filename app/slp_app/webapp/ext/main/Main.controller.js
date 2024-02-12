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

            // onRowShiftAction: async function (oEvent) {

            //     debugger
            //     var oSource = oEvent.getSource(),
            //         oRow = oSource.getParent(),
            //         oTable = this.getView().byId("tab1"),
            //         aItems = oTable.getItems(),
            //         index = 0,
            //         that = this;
            //     var inner_table = oRow.getCells()[4];
            //     //Loop to get the current item index
            //     for (var i in aItems) {
            //         if (aItems[i].getBindingContextPath() === oRow.getBindingContextPath()) {
            //             index = i;
            //         }
            //     }
            //     //Check to count child tables created for different rows to generate unique ID
            //     if (!this.childCount) {
            //         this.childCount = 1;
            //     } else {
            //         this.childCount++;
            //     }

            //     if (oSource.getSrc() === "sap-icon://expand") {
            //         debugger
            //         oRow.addStyleClass("customclasscolorback");
            //         var t_data;
            //         var s = oEvent.oSource.getParent().mAggregations.cells[0].mProperties.text;
            //         await $.ajax({
            //             url: `/odata/v4/tpl-service/Supplier('${s}')?$expand=tasks`,
            //             type: "GET",
            //             contentType: "application/json",
            //             success: function (a) {
            //                 var temp = a.tasks;
            //                 t_data = {
            //                     tasks : temp 
            //                 };
            //             },
            //             error: function (t) {
            //                 e.show("Error updating data on the server.")
            //             }
            //         })

            //         var jsonModel = new sap.ui.model.json.JSONModel();
            //         jsonModel.setData(t_data);
                    
            //         oSource.setSrc("sap-icon://collapse");
                    
            //         var oItemTemplate = new sap.m.ColumnListItem({
            //             cells: [
            //                 new sap.m.Text({
            //                     text: "{task_name}"
            //                 }),
            //                 new sap.m.Text({
            //                     text: "{start_date}"
            //                 }),
            //                 new sap.m.Text({
            //                     text: "{end_date}"
            //                 }),
            //                 new sap.m.Text({
            //                     text: "{tat_for_registration_completion}"
            //                 }),
            //                 new sap.m.Text({
            //                     text: "{user} 123"
            //                 })
            //             ]
            //         });
            //         // if (!this.oNewTable) {
            //         var width = window.innerWidth - 100;
            //         var oNewTable = new sap.m.Table('newtable',{
            //             id: "idChildTable" + this.childCount,
            //             width: window.innerWidth - 100 + "px",
            //             columns: [
            //                 new sap.m.Column({
            //                     header: new sap.m.Text({
            //                         text: "Task Name"
            //                     }),
            //                     width: "4rem"
            //                 }),
            //                 new sap.m.Column({
            //                     minScreenWidth: "Tablet",
            //                     demandPopin: true,
            //                     popinDisplay: sap.m.PopinDisplay.Inline,
            //                     header: new sap.m.Text({
            //                         text: "Start Date"
            //                     }),
            //                     width: "4rem"
            //                 }), new sap.m.Column({
            //                     minScreenWidth: "Tablet",
            //                     demandPopin: true,
            //                     popinDisplay: sap.m.PopinDisplay.Inline,
            //                     header: new sap.m.Text({
            //                         text: "End Date"
            //                     }),
            //                     width: "4rem"
            //                 }), new sap.m.Column({
            //                     minScreenWidth: "Tablet",
            //                     demandPopin: true,
            //                     popinDisplay: sap.m.PopinDisplay.Inline,
            //                     header: new sap.m.Text({
            //                         text: "TAT"
            //                     }),
            //                     width: "4rem"
            //                 }), new sap.m.Column({
            //                     demandPopin: true,
            //                     popinDisplay: sap.m.PopinDisplay.Inline,
            //                     header: new sap.m.Text({
            //                         text: "User"
            //                     }),
            //                     width: "4rem"
            //                 })
            //             ]
            //         });
            //         oNewTable.bindItems({
            //             path: "/tasks",
            //             template: oItemTemplate
            //         });

            //         oNewTable.setModel(jsonModel);
            //         oNewTable.addStyleClass("customclasscolorback");
                    
            //         oTable.insertItem(new sap.m.ColumnListItem({
            //             cells:[
            //                 oNewTable
            //             ]
            //         }), parseInt(index) + 1);

            //         debugger
                    
            //         // oTable.insertItem(new sap.m.CustomListItem({
            //         //     oNewTable
            //         // }), parseInt(index) + 1);
            //         // var custlist = oTable.getItems()[(parseInt(index) + 1)];
            //         // custlist.addContent(oNewTable);
            //         // custlist.addContent(oNewTable);
            //     } else {
            //         oTable.removeItem(aItems[parseInt(index) + 1]); //On collapse removing table
            //         oSource.setSrc("sap-icon://expand");
            //         oRow.removeStyleClass("customclasscolorback");
            //     }
            // },

           
            

            onFilterPosts: function (oEvent) {
                debugger
                var sValue = oEvent.getParameter("query");
                // var oFilter1 = new Filter("supplier_name", FilterOperator.Contains, sValue, false );
                // var oFilter2 = new Filter("sm_id", FilterOperator.Contains, sValue); 
                // var oFilter3 = new Filter("erp_vendor_code", FilterOperator.Contains, sValue); 
                var oFilter1 = new Filter({
                    path: "supplier_name",
                    operator: FilterOperator.Contains,
                    value1: sValue.toLowerCase(), // Convert input value to lowercase
                    caseSensitive: false  // Set caseSensitive to false
                });
                var oFilter2 = new Filter({
                    path: "sm_id",
                    operator: FilterOperator.Contains,
                    value1: sValue.toLowerCase(), 
                    caseSensitive: false  
                });
                var oFilter3 = new Filter({
                    path: "erp_vendor_code",
                    operator: FilterOperator.Contains,
                    value1: sValue.toLowerCase(), 
                    caseSensitive: false  
                });
                var oCombinedFilter = new Filter({filters: [oFilter1, oFilter2,oFilter3],and: false });
                var oTable = this.getView().byId("tab1");
                var oBinding = oTable.getBinding("items");
                oBinding.filter([oCombinedFilter]);
              }
        });
    }
);
