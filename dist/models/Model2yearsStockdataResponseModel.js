"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model2yearsStockdataResponseModel = void 0;
var Model2yearsStockdataResponseModel = (function () {
    function Model2yearsStockdataResponseModel() {
    }
    Model2yearsStockdataResponseModel.getAttributeTypeMap = function () {
        return Model2yearsStockdataResponseModel.attributeTypeMap;
    };
    Model2yearsStockdataResponseModel.discriminator = undefined;
    Model2yearsStockdataResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "Model1yearStockdataResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return Model2yearsStockdataResponseModel;
}());
exports.Model2yearsStockdataResponseModel = Model2yearsStockdataResponseModel;
//# sourceMappingURL=Model2yearsStockdataResponseModel.js.map