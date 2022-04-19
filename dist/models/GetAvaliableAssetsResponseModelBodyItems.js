"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvaliableAssetsResponseModelBodyItems = void 0;
var GetAvaliableAssetsResponseModelBodyItems = (function () {
    function GetAvaliableAssetsResponseModelBodyItems() {
    }
    GetAvaliableAssetsResponseModelBodyItems.getAttributeTypeMap = function () {
        return GetAvaliableAssetsResponseModelBodyItems.attributeTypeMap;
    };
    GetAvaliableAssetsResponseModelBodyItems.discriminator = undefined;
    GetAvaliableAssetsResponseModelBodyItems.attributeTypeMap = [
        {
            "name": "tokenAmmount",
            "baseName": "tokenAmmount",
            "type": "number",
            "format": "float"
        },
        {
            "name": "price24HoursAgo",
            "baseName": "price24HoursAgo",
            "type": "number",
            "format": "float"
        },
        {
            "name": "currentPrice",
            "baseName": "currentPrice",
            "type": "number",
            "format": "float"
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return GetAvaliableAssetsResponseModelBodyItems;
}());
exports.GetAvaliableAssetsResponseModelBodyItems = GetAvaliableAssetsResponseModelBodyItems;
//# sourceMappingURL=GetAvaliableAssetsResponseModelBodyItems.js.map