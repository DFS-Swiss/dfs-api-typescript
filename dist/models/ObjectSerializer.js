"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./BuyAssetRequestModel"), exports);
__exportStar(require("./BuyAssetResponseModel"), exports);
__exportStar(require("./GetAvaliableAssetsResponseModel"), exports);
__exportStar(require("./GetAvaliableAssetsResponseModelBody"), exports);
__exportStar(require("./GetAvaliableAssetsResponseModelBodyItems"), exports);
__exportStar(require("./GetAvaliableBalanceResponseModel"), exports);
__exportStar(require("./GetAvaliableBalanceResponseModelBody"), exports);
__exportStar(require("./GetAvaliableBalanceResponseModelBodyItem"), exports);
__exportStar(require("./GetStockdataInfoResponseModel"), exports);
__exportStar(require("./GetStockdataInfoResponseModelBody"), exports);
__exportStar(require("./GetStockdataInfoResponseModelBodyItem"), exports);
__exportStar(require("./GetStockdataLatestResponseModel"), exports);
__exportStar(require("./GetStockdataLatestResponseModelBody"), exports);
__exportStar(require("./GetUserResponseModel"), exports);
__exportStar(require("./GetUserResponseModelBody"), exports);
__exportStar(require("./GetUserResponseModelBodyItem"), exports);
__exportStar(require("./ListSymbols"), exports);
__exportStar(require("./ListSymbolsBody"), exports);
__exportStar(require("./ListSymbolsBodyItems"), exports);
__exportStar(require("./Model1yearStockdataResponseModel"), exports);
__exportStar(require("./Model1yearStockdataResponseModelBody"), exports);
__exportStar(require("./Model1yearStockdataResponseModelBodyItems"), exports);
__exportStar(require("./Model24hStockdataResponseModel"), exports);
__exportStar(require("./Model2yearsStockdataResponseModel"), exports);
__exportStar(require("./MtdStockdataResponseModel"), exports);
__exportStar(require("./SellAssetRequestModel"), exports);
__exportStar(require("./SellAssetResponseModel"), exports);
__exportStar(require("./YtdStockdataResponseModel"), exports);
var BuyAssetRequestModel_1 = require("./BuyAssetRequestModel");
var BuyAssetResponseModel_1 = require("./BuyAssetResponseModel");
var GetAvaliableAssetsResponseModel_1 = require("./GetAvaliableAssetsResponseModel");
var GetAvaliableAssetsResponseModelBody_1 = require("./GetAvaliableAssetsResponseModelBody");
var GetAvaliableAssetsResponseModelBodyItems_1 = require("./GetAvaliableAssetsResponseModelBodyItems");
var GetAvaliableBalanceResponseModel_1 = require("./GetAvaliableBalanceResponseModel");
var GetAvaliableBalanceResponseModelBody_1 = require("./GetAvaliableBalanceResponseModelBody");
var GetAvaliableBalanceResponseModelBodyItem_1 = require("./GetAvaliableBalanceResponseModelBodyItem");
var GetStockdataInfoResponseModel_1 = require("./GetStockdataInfoResponseModel");
var GetStockdataInfoResponseModelBody_1 = require("./GetStockdataInfoResponseModelBody");
var GetStockdataInfoResponseModelBodyItem_1 = require("./GetStockdataInfoResponseModelBodyItem");
var GetStockdataLatestResponseModel_1 = require("./GetStockdataLatestResponseModel");
var GetStockdataLatestResponseModelBody_1 = require("./GetStockdataLatestResponseModelBody");
var GetUserResponseModel_1 = require("./GetUserResponseModel");
var GetUserResponseModelBody_1 = require("./GetUserResponseModelBody");
var GetUserResponseModelBodyItem_1 = require("./GetUserResponseModelBodyItem");
var ListSymbols_1 = require("./ListSymbols");
var ListSymbolsBody_1 = require("./ListSymbolsBody");
var ListSymbolsBodyItems_1 = require("./ListSymbolsBodyItems");
var Model1yearStockdataResponseModel_1 = require("./Model1yearStockdataResponseModel");
var Model1yearStockdataResponseModelBody_1 = require("./Model1yearStockdataResponseModelBody");
var Model1yearStockdataResponseModelBodyItems_1 = require("./Model1yearStockdataResponseModelBodyItems");
var Model24hStockdataResponseModel_1 = require("./Model24hStockdataResponseModel");
var Model2yearsStockdataResponseModel_1 = require("./Model2yearsStockdataResponseModel");
var MtdStockdataResponseModel_1 = require("./MtdStockdataResponseModel");
var SellAssetRequestModel_1 = require("./SellAssetRequestModel");
var SellAssetResponseModel_1 = require("./SellAssetResponseModel");
var YtdStockdataResponseModel_1 = require("./YtdStockdataResponseModel");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([]);
var typeMap = {
    "BuyAssetRequestModel": BuyAssetRequestModel_1.BuyAssetRequestModel,
    "BuyAssetResponseModel": BuyAssetResponseModel_1.BuyAssetResponseModel,
    "GetAvaliableAssetsResponseModel": GetAvaliableAssetsResponseModel_1.GetAvaliableAssetsResponseModel,
    "GetAvaliableAssetsResponseModelBody": GetAvaliableAssetsResponseModelBody_1.GetAvaliableAssetsResponseModelBody,
    "GetAvaliableAssetsResponseModelBodyItems": GetAvaliableAssetsResponseModelBodyItems_1.GetAvaliableAssetsResponseModelBodyItems,
    "GetAvaliableBalanceResponseModel": GetAvaliableBalanceResponseModel_1.GetAvaliableBalanceResponseModel,
    "GetAvaliableBalanceResponseModelBody": GetAvaliableBalanceResponseModelBody_1.GetAvaliableBalanceResponseModelBody,
    "GetAvaliableBalanceResponseModelBodyItem": GetAvaliableBalanceResponseModelBodyItem_1.GetAvaliableBalanceResponseModelBodyItem,
    "GetStockdataInfoResponseModel": GetStockdataInfoResponseModel_1.GetStockdataInfoResponseModel,
    "GetStockdataInfoResponseModelBody": GetStockdataInfoResponseModelBody_1.GetStockdataInfoResponseModelBody,
    "GetStockdataInfoResponseModelBodyItem": GetStockdataInfoResponseModelBodyItem_1.GetStockdataInfoResponseModelBodyItem,
    "GetStockdataLatestResponseModel": GetStockdataLatestResponseModel_1.GetStockdataLatestResponseModel,
    "GetStockdataLatestResponseModelBody": GetStockdataLatestResponseModelBody_1.GetStockdataLatestResponseModelBody,
    "GetUserResponseModel": GetUserResponseModel_1.GetUserResponseModel,
    "GetUserResponseModelBody": GetUserResponseModelBody_1.GetUserResponseModelBody,
    "GetUserResponseModelBodyItem": GetUserResponseModelBodyItem_1.GetUserResponseModelBodyItem,
    "ListSymbols": ListSymbols_1.ListSymbols,
    "ListSymbolsBody": ListSymbolsBody_1.ListSymbolsBody,
    "ListSymbolsBodyItems": ListSymbolsBodyItems_1.ListSymbolsBodyItems,
    "Model1yearStockdataResponseModel": Model1yearStockdataResponseModel_1.Model1yearStockdataResponseModel,
    "Model1yearStockdataResponseModelBody": Model1yearStockdataResponseModelBody_1.Model1yearStockdataResponseModelBody,
    "Model1yearStockdataResponseModelBodyItems": Model1yearStockdataResponseModelBodyItems_1.Model1yearStockdataResponseModelBodyItems,
    "Model24hStockdataResponseModel": Model24hStockdataResponseModel_1.Model24hStockdataResponseModel,
    "Model2yearsStockdataResponseModel": Model2yearsStockdataResponseModel_1.Model2yearsStockdataResponseModel,
    "MtdStockdataResponseModel": MtdStockdataResponseModel_1.MtdStockdataResponseModel,
    "SellAssetRequestModel": SellAssetRequestModel_1.SellAssetRequestModel,
    "SellAssetResponseModel": SellAssetResponseModel_1.SellAssetResponseModel,
    "YtdStockdataResponseModel": YtdStockdataResponseModel_1.YtdStockdataResponseModel,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map