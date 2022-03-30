"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSymbols = void 0;
var ListSymbols = (function () {
    function ListSymbols() {
    }
    ListSymbols.getAttributeTypeMap = function () {
        return ListSymbols.attributeTypeMap;
    };
    ListSymbols.discriminator = undefined;
    ListSymbols.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "ListSymbolsBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return ListSymbols;
}());
exports.ListSymbols = ListSymbols;
//# sourceMappingURL=ListSymbols.js.map