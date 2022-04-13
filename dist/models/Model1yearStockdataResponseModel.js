"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model1yearStockdataResponseModel = void 0;
var Model1yearStockdataResponseModel = (function () {
    function Model1yearStockdataResponseModel() {
    }
    Model1yearStockdataResponseModel.getAttributeTypeMap = function () {
        return Model1yearStockdataResponseModel.attributeTypeMap;
    };
    Model1yearStockdataResponseModel.discriminator = undefined;
    Model1yearStockdataResponseModel.attributeTypeMap = [
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
    return Model1yearStockdataResponseModel;
}());
exports.Model1yearStockdataResponseModel = Model1yearStockdataResponseModel;
//# sourceMappingURL=Model1yearStockdataResponseModel.js.map