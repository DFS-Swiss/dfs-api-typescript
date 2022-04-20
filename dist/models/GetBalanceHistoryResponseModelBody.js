"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBalanceHistoryResponseModelBody = void 0;
var GetBalanceHistoryResponseModelBody = (function () {
    function GetBalanceHistoryResponseModelBody() {
    }
    GetBalanceHistoryResponseModelBody.getAttributeTypeMap = function () {
        return GetBalanceHistoryResponseModelBody.attributeTypeMap;
    };
    GetBalanceHistoryResponseModelBody.discriminator = undefined;
    GetBalanceHistoryResponseModelBody.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<GetAvaliableBalanceResponseModelBodyItem>",
            "format": ""
        }
    ];
    return GetBalanceHistoryResponseModelBody;
}());
exports.GetBalanceHistoryResponseModelBody = GetBalanceHistoryResponseModelBody;
//# sourceMappingURL=GetBalanceHistoryResponseModelBody.js.map