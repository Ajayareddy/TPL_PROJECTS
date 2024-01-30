sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
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
            // onRowShiftAction: function (oEvent) {
            //     var oSource = oEvent.getSource(),
            //         oRow = oSource.getParent();
            //     if (oSource.getSrc() === "sap-icon://expand") {
            //         oSource.setSrc("sap-icon://collapse");
            //         oRow.getCells()[5].setVisible(true);
            //     } else {
            //         oSource.setSrc("sap-icon://expand");
            //         oRow.getCells()[5].setVisible(false);
            //     }
            // }

            onRowShiftAction: function (oEvent) {
                debugger
                var oSource = oEvent.getSource(),
                oRow = oSource.getParent().getParent(),
                oTable = this.getView().byId("tab1"),
                aItems = oTable.getItems(),
                index = 0,
                that = this;
    //Loop to get the current item index
                for (var i in aItems) {
                    if (aItems[i].getBindingContextPath() === oRow.getBindingContextPath()) {
                        index = i;
                    }
                }
    //Check to count child tables created for different rows to generate unique ID
                if (!this.childCount) {
                    this.childCount = 1;
                } else {
                    this.childCount++;
                }
    
                if (oSource.getSrc() === "sap-icon://navigation-right-arrow") {
                    oSource.setSrc("sap-icon://navigation-down-arrow");
                    var oItemTemplate = new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({
                                text: "{model>Col1}"
                            }),
                            new sap.m.Text({
                                text: "{model>Col2}"
                            }),
                            new sap.m.Text({
                                text: "{model>Col3}"
                            })
                        ]
                    });
                    // if (!this.oNewTable) {
                    var width = window.innerWidth - 100;
                    var oNewTable = new sap.m.Table({
                        id: "item_table" + this.childCount,
                        width: window.innerWidth - 100 + "px",
                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({
                                    text: "task_name"
                                }),
                                width: "4rem"
                            }),
                            new sap.m.Column({
                                minScreenWidth: "Tablet",
                                demandPopin: true,
                                popinDisplay: sap.m.PopinDisplay.Inline,
                                header: new sap.m.Text({
                                    text: "Col2"
                                }),
                                width: "6rem"
                            }), new sap.m.Column({
                                minScreenWidth: "Desktop",
                                demandPopin: true,
                                popinDisplay: sap.m.PopinDisplay.Inline,
                                header: new sap.m.Text({
                                    text: "Col3"
                                }),
                                width: "15rem"
                            })
                        ]
                    });
                    oNewTable.bindItems({
                        path: "model>/EntitySet",
                        template: oItemTemplate
                    });
                    oTable.insertItem(new sap.m.ColumnListItem({
                        cells: [
                            oNewTable
                        ]
                    }), parseInt(index) + 1);
                } else {
                    oTable.removeItem(aItems[parseInt(index) + 1]); //On collapse removing table
                    oSource.setSrc("sap-icon://navigation-right-arrow");
                }
            }
        });
    }
);
