"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserResponseModel = void 0;
var GetUserResponseModel = (function () {
    function GetUserResponseModel() {
    }
    GetUserResponseModel.getAttributeTypeMap = function () {
        return GetUserResponseModel.attributeTypeMap;
    };
    GetUserResponseModel.discriminator = undefined;
    GetUserResponseModel.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "GetUserResponseModelBody",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number",
            "format": ""
        }
    ];
    return GetUserResponseModel;
}());
exports.GetUserResponseModel = GetUserResponseModel;
//# sourceMappingURL=GetUserResponseModel.js.map