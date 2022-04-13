"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSymbolsBodyItems = void 0;
var ListSymbolsBodyItems = (function () {
    function ListSymbolsBodyItems() {
    }
    ListSymbolsBodyItems.getAttributeTypeMap = function () {
        return ListSymbolsBodyItems.attributeTypeMap;
    };
    ListSymbolsBodyItems.discriminator = undefined;
    ListSymbolsBodyItems.attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "GetStockdataInfoResponseModelBodyItem",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Model1yearStockdataResponseModelBodyItems>",
            "format": ""
        }
    ];
    return ListSymbolsBodyItems;
}());
exports.ListSymbolsBodyItems = ListSymbolsBodyItems;
//# sourceMappingURL=ListSymbolsBodyItems.js.map