"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStockdataInfoResponseModel = void 0;
var GetStockdataInfoResponseModel = (function () {
    function GetStockdataInfoResponseModel() {
    }
    GetStockdataInfoResponseModel.getAttributeTypeMap = function () {
        return GetStockdataInfoResponseModel.attributeTypeMap;
    };
    GetStockdataInfoResponseModel.discriminator = undefined;
    GetStockdataInfoResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "GetStockdataInfoResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return GetStockdataInfoResponseModel;
}());
exports.GetStockdataInfoResponseModel = GetStockdataInfoResponseModel;
//# sourceMappingURL=GetStockdataInfoResponseModel.js.map