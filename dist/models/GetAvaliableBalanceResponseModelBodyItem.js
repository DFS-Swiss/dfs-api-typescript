"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvaliableBalanceResponseModelBodyItem = void 0;
var GetAvaliableBalanceResponseModelBodyItem = (function () {
    function GetAvaliableBalanceResponseModelBodyItem() {
    }
    GetAvaliableBalanceResponseModelBodyItem.getAttributeTypeMap = function () {
        return GetAvaliableBalanceResponseModelBodyItem.attributeTypeMap;
    };
    GetAvaliableBalanceResponseModelBodyItem.discriminator = undefined;
    GetAvaliableBalanceResponseModelBodyItem.attributeTypeMap = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        },
        {
            "name": "newBalance",
            "baseName": "newBalance",
            "type": "number",
            "format": "float"
        },
        {
            "name": "oldBalance",
            "baseName": "oldBalance",
            "type": "number",
            "format": "float"
        },
        {
            "name": "difference",
            "baseName": "difference",
            "type": "number",
            "format": "float"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string",
            "format": ""
        }
    ];
    return GetAvaliableBalanceResponseModelBodyItem;
}());
exports.GetAvaliableBalanceResponseModelBodyItem = GetAvaliableBalanceResponseModelBodyItem;
//# sourceMappingURL=GetAvaliableBalanceResponseModelBodyItem.js.map