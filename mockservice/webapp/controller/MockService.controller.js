sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
], function (Controller, formatter) {
    "use strict";

    return Controller.extend("sapips.training.mockservice.controller.MockService", {

        formatter: formatter,

        onCreate: function () {
            //Define Data
            var oProduct = {
                ProductID: "21",
                ProductName: "myProduct"
            }

            var oProductModel = this.getOwnerComponent().getModel("ProductsModel");
            oProductModel.create("/Products", oProduct, {

            });
        },
        onSelectProduct: function (oEvent) {
            //Get the Control(List)
            var oList = oEvent.getSource();

            //Get the selected item
            var oSelItem = oList.getSelectedItem();

            //Get the context binding path
            var sSelItemPath = oSelItem.getBindingContextPath();

            //Bind the selected item to control(simpleform in Panel4)
            this.getView().byId("idProductDetails").bindElement({
                path: sSelItemPath,
                model: "ProductsModel"
            })
        }
    });
});