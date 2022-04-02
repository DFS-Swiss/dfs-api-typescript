"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YtdStockdataResponseModelBody = void 0;
var YtdStockdataResponseModelBody = (function () {
    function YtdStockdataResponseModelBody() {
    }
    YtdStockdataResponseModelBody.getAttributeTypeMap = function () {
        return YtdStockdataResponseModelBody.attributeTypeMap;
    };
    YtdStockdataResponseModelBody.discriminator = undefined;
    YtdStockdataResponseModelBody.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ListSymbolsBodyData>",
            "format": ""
        }
    ];
    return YtdStockdataResponseModelBody;
}());
exports.YtdStockdataResponseModelBody = YtdStockdataResponseModelBody;
//# sourceMappingURL=YtdStockdataResponseModelBody.js.map