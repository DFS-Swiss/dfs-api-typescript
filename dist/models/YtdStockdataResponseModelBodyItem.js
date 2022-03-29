"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YtdStockdataResponseModelBodyItem = void 0;
var YtdStockdataResponseModelBodyItem = (function () {
    function YtdStockdataResponseModelBodyItem() {
    }
    YtdStockdataResponseModelBodyItem.getAttributeTypeMap = function () {
        return YtdStockdataResponseModelBodyItem.attributeTypeMap;
    };
    YtdStockdataResponseModelBodyItem.discriminator = undefined;
    YtdStockdataResponseModelBodyItem.attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "float"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        }
    ];
    return YtdStockdataResponseModelBodyItem;
}());
exports.YtdStockdataResponseModelBodyItem = YtdStockdataResponseModelBodyItem;
//# sourceMappingURL=YtdStockdataResponseModelBodyItem.js.map