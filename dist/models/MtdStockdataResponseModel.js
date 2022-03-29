"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MtdStockdataResponseModel = void 0;
var MtdStockdataResponseModel = (function () {
    function MtdStockdataResponseModel() {
    }
    MtdStockdataResponseModel.getAttributeTypeMap = function () {
        return MtdStockdataResponseModel.attributeTypeMap;
    };
    MtdStockdataResponseModel.discriminator = undefined;
    MtdStockdataResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "YtdStockdataResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return MtdStockdataResponseModel;
}());
exports.MtdStockdataResponseModel = MtdStockdataResponseModel;
//# sourceMappingURL=MtdStockdataResponseModel.js.map