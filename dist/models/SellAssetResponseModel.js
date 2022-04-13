"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellAssetResponseModel = void 0;
var SellAssetResponseModel = (function () {
    function SellAssetResponseModel() {
    }
    SellAssetResponseModel.getAttributeTypeMap = function () {
        return SellAssetResponseModel.attributeTypeMap;
    };
    SellAssetResponseModel.discriminator = undefined;
    SellAssetResponseModel.attributeTypeMap = [
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
    return SellAssetResponseModel;
}());
exports.SellAssetResponseModel = SellAssetResponseModel;
//# sourceMappingURL=SellAssetResponseModel.js.map