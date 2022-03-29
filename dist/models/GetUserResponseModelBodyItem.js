"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserResponseModelBodyItem = void 0;
var GetUserResponseModelBodyItem = (function () {
    function GetUserResponseModelBodyItem() {
    }
    GetUserResponseModelBodyItem.getAttributeTypeMap = function () {
        return GetUserResponseModelBodyItem.attributeTypeMap;
    };
    GetUserResponseModelBodyItem.discriminator = undefined;
    GetUserResponseModelBodyItem.attributeTypeMap = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastLogin",
            "baseName": "lastLogin",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "referalCode",
            "baseName": "referalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "surName",
            "baseName": "surName",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailConfirmed",
            "baseName": "emailConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inputWalletAdress",
            "baseName": "inputWalletAdress",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }
    ];
    return GetUserResponseModelBodyItem;
}());
exports.GetUserResponseModelBodyItem = GetUserResponseModelBodyItem;
//# sourceMappingURL=GetUserResponseModelBodyItem.js.map