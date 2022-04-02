"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStockdataInfoResponseModelBodyItem = void 0;
var GetStockdataInfoResponseModelBodyItem = (function () {
    function GetStockdataInfoResponseModelBodyItem() {
    }
    GetStockdataInfoResponseModelBodyItem.getAttributeTypeMap = function () {
        return GetStockdataInfoResponseModelBodyItem.attributeTypeMap;
    };
    GetStockdataInfoResponseModelBodyItem.discriminator = undefined;
    GetStockdataInfoResponseModelBodyItem.attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        }
    ];
    return GetStockdataInfoResponseModelBodyItem;
}());
exports.GetStockdataInfoResponseModelBodyItem = GetStockdataInfoResponseModelBodyItem;
//# sourceMappingURL=GetStockdataInfoResponseModelBodyItem.js.map