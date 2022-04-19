"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvaliableBalanceResponseModel = void 0;
var GetAvaliableBalanceResponseModel = (function () {
    function GetAvaliableBalanceResponseModel() {
    }
    GetAvaliableBalanceResponseModel.getAttributeTypeMap = function () {
        return GetAvaliableBalanceResponseModel.attributeTypeMap;
    };
    GetAvaliableBalanceResponseModel.discriminator = undefined;
    GetAvaliableBalanceResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "GetAvaliableBalanceResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return GetAvaliableBalanceResponseModel;
}());
exports.GetAvaliableBalanceResponseModel = GetAvaliableBalanceResponseModel;
//# sourceMappingURL=GetAvaliableBalanceResponseModel.js.map