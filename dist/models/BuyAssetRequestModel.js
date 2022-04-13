"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyAssetRequestModel = void 0;
var BuyAssetRequestModel = (function () {
    function BuyAssetRequestModel() {
    }
    BuyAssetRequestModel.getAttributeTypeMap = function () {
        return BuyAssetRequestModel.attributeTypeMap;
    };
    BuyAssetRequestModel.discriminator = undefined;
    BuyAssetRequestModel.attributeTypeMap = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "amountToSpend",
            "baseName": "amountToSpend",
            "type": "number",
            "format": ""
        },
        {
            "name": "tokenToBuy",
            "baseName": "tokenToBuy",
            "type": "number",
            "format": ""
        }
    ];
    return BuyAssetRequestModel;
}());
exports.BuyAssetRequestModel = BuyAssetRequestModel;
//# sourceMappingURL=BuyAssetRequestModel.js.map