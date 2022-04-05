"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStockdataLatestResponseModel = void 0;
var GetStockdataLatestResponseModel = (function () {
    function GetStockdataLatestResponseModel() {
    }
    GetStockdataLatestResponseModel.getAttributeTypeMap = function () {
        return GetStockdataLatestResponseModel.attributeTypeMap;
    };
    GetStockdataLatestResponseModel.discriminator = undefined;
    GetStockdataLatestResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "GetStockdataLatestResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return GetStockdataLatestResponseModel;
}());
exports.GetStockdataLatestResponseModel = GetStockdataLatestResponseModel;
//# sourceMappingURL=GetStockdataLatestResponseModel.js.map