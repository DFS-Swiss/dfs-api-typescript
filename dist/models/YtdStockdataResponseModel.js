"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YtdStockdataResponseModel = void 0;
var YtdStockdataResponseModel = (function () {
    function YtdStockdataResponseModel() {
    }
    YtdStockdataResponseModel.getAttributeTypeMap = function () {
        return YtdStockdataResponseModel.attributeTypeMap;
    };
    YtdStockdataResponseModel.discriminator = undefined;
    YtdStockdataResponseModel.attributeTypeMap = [
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
    return YtdStockdataResponseModel;
}());
exports.YtdStockdataResponseModel = YtdStockdataResponseModel;
//# sourceMappingURL=YtdStockdataResponseModel.js.map