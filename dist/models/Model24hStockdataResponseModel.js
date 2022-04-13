"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model24hStockdataResponseModel = void 0;
var Model24hStockdataResponseModel = (function () {
    function Model24hStockdataResponseModel() {
    }
    Model24hStockdataResponseModel.getAttributeTypeMap = function () {
        return Model24hStockdataResponseModel.attributeTypeMap;
    };
    Model24hStockdataResponseModel.discriminator = undefined;
    Model24hStockdataResponseModel.attributeTypeMap = [
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
    return Model24hStockdataResponseModel;
}());
exports.Model24hStockdataResponseModel = Model24hStockdataResponseModel;
//# sourceMappingURL=Model24hStockdataResponseModel.js.map