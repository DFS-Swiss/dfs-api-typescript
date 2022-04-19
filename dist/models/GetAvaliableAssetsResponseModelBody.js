"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvaliableAssetsResponseModelBody = void 0;
var GetAvaliableAssetsResponseModelBody = (function () {
    function GetAvaliableAssetsResponseModelBody() {
    }
    GetAvaliableAssetsResponseModelBody.getAttributeTypeMap = function () {
        return GetAvaliableAssetsResponseModelBody.attributeTypeMap;
    };
    GetAvaliableAssetsResponseModelBody.discriminator = undefined;
    GetAvaliableAssetsResponseModelBody.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<GetAvaliableAssetsResponseModelBodyItems>",
            "format": ""
        }
    ];
    return GetAvaliableAssetsResponseModelBody;
}());
exports.GetAvaliableAssetsResponseModelBody = GetAvaliableAssetsResponseModelBody;
//# sourceMappingURL=GetAvaliableAssetsResponseModelBody.js.map