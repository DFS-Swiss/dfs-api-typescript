"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvaliableAssetsResponseModel = void 0;
var GetAvaliableAssetsResponseModel = (function () {
    function GetAvaliableAssetsResponseModel() {
    }
    GetAvaliableAssetsResponseModel.getAttributeTypeMap = function () {
        return GetAvaliableAssetsResponseModel.attributeTypeMap;
    };
    GetAvaliableAssetsResponseModel.discriminator = undefined;
    GetAvaliableAssetsResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "GetAvaliableAssetsResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return GetAvaliableAssetsResponseModel;
}());
exports.GetAvaliableAssetsResponseModel = GetAvaliableAssetsResponseModel;
//# sourceMappingURL=GetAvaliableAssetsResponseModel.js.map