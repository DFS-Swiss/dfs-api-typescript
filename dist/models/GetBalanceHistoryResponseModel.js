"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBalanceHistoryResponseModel = void 0;
var GetBalanceHistoryResponseModel = (function () {
    function GetBalanceHistoryResponseModel() {
    }
    GetBalanceHistoryResponseModel.getAttributeTypeMap = function () {
        return GetBalanceHistoryResponseModel.attributeTypeMap;
    };
    GetBalanceHistoryResponseModel.discriminator = undefined;
    GetBalanceHistoryResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "GetBalanceHistoryResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return GetBalanceHistoryResponseModel;
}());
exports.GetBalanceHistoryResponseModel = GetBalanceHistoryResponseModel;
//# sourceMappingURL=GetBalanceHistoryResponseModel.js.map