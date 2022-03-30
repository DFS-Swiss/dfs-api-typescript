"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSymbolsBodySymbol = void 0;
var ListSymbolsBodySymbol = (function () {
    function ListSymbolsBodySymbol() {
    }
    ListSymbolsBodySymbol.getAttributeTypeMap = function () {
        return ListSymbolsBodySymbol.attributeTypeMap;
    };
    ListSymbolsBodySymbol.discriminator = undefined;
    ListSymbolsBodySymbol.attributeTypeMap = [
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
    return ListSymbolsBodySymbol;
}());
exports.ListSymbolsBodySymbol = ListSymbolsBodySymbol;
//# sourceMappingURL=ListSymbolsBodySymbol.js.map