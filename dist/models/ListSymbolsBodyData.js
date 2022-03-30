"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSymbolsBodyData = void 0;
var ListSymbolsBodyData = (function () {
    function ListSymbolsBodyData() {
    }
    ListSymbolsBodyData.getAttributeTypeMap = function () {
        return ListSymbolsBodyData.attributeTypeMap;
    };
    ListSymbolsBodyData.discriminator = undefined;
    ListSymbolsBodyData.attributeTypeMap = [
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
    return ListSymbolsBodyData;
}());
exports.ListSymbolsBodyData = ListSymbolsBodyData;
//# sourceMappingURL=ListSymbolsBodyData.js.map