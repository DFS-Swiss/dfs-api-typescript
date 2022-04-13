"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyAssetResponseModel = void 0;
var BuyAssetResponseModel = (function () {
    function BuyAssetResponseModel() {
    }
    BuyAssetResponseModel.getAttributeTypeMap = function () {
        return BuyAssetResponseModel.attributeTypeMap;
    };
    BuyAssetResponseModel.discriminator = undefined;
    BuyAssetResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return BuyAssetResponseModel;
}());
exports.BuyAssetResponseModel = BuyAssetResponseModel;
//# sourceMappingURL=BuyAssetResponseModel.js.map