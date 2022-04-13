"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model1yearStockdataResponseModelBodyItems = void 0;
var Model1yearStockdataResponseModelBodyItems = (function () {
    function Model1yearStockdataResponseModelBodyItems() {
    }
    Model1yearStockdataResponseModelBodyItems.getAttributeTypeMap = function () {
        return Model1yearStockdataResponseModelBodyItems.attributeTypeMap;
    };
    Model1yearStockdataResponseModelBodyItems.discriminator = undefined;
    Model1yearStockdataResponseModelBodyItems.attributeTypeMap = [
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
    return Model1yearStockdataResponseModelBodyItems;
}());
exports.Model1yearStockdataResponseModelBodyItems = Model1yearStockdataResponseModelBodyItems;
//# sourceMappingURL=Model1yearStockdataResponseModelBodyItems.js.map