"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellAssetRequestModel = void 0;
var SellAssetRequestModel = (function () {
    function SellAssetRequestModel() {
    }
    SellAssetRequestModel.getAttributeTypeMap = function () {
        return SellAssetRequestModel.attributeTypeMap;
    };
    SellAssetRequestModel.discriminator = undefined;
    SellAssetRequestModel.attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "ammountOfTokensToSell",
            "baseName": "ammountOfTokensToSell",
            "type": "number",
            "format": ""
        }
    ];
    return SellAssetRequestModel;
}());
exports.SellAssetRequestModel = SellAssetRequestModel;
//# sourceMappingURL=SellAssetRequestModel.js.map