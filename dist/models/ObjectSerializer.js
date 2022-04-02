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
__exportStar(require("./GetStockdataInfoResponseModel"), exports);
__exportStar(require("./GetStockdataInfoResponseModelBody"), exports);
__exportStar(require("./GetStockdataInfoResponseModelBodyItem"), exports);
__exportStar(require("./GetUserResponseModel"), exports);
__exportStar(require("./GetUserResponseModelBody"), exports);
__exportStar(require("./GetUserResponseModelBodyItem"), exports);
__exportStar(require("./ListSymbols"), exports);
__exportStar(require("./ListSymbolsBody"), exports);
__exportStar(require("./ListSymbolsBodyData"), exports);
__exportStar(require("./ListSymbolsBodyItems"), exports);
__exportStar(require("./Model1yearStockdataResponseModel"), exports);
__exportStar(require("./Model24hStockdataResponseModel"), exports);
__exportStar(require("./Model2yearsStockdataResponseModel"), exports);
__exportStar(require("./MtdStockdataResponseModel"), exports);
__exportStar(require("./YtdStockdataResponseModel"), exports);
__exportStar(require("./YtdStockdataResponseModelBody"), exports);
var GetStockdataInfoResponseModel_1 = require("./GetStockdataInfoResponseModel");
var GetStockdataInfoResponseModelBody_1 = require("./GetStockdataInfoResponseModelBody");
var GetStockdataInfoResponseModelBodyItem_1 = require("./GetStockdataInfoResponseModelBodyItem");
var GetUserResponseModel_1 = require("./GetUserResponseModel");
var GetUserResponseModelBody_1 = require("./GetUserResponseModelBody");
var GetUserResponseModelBodyItem_1 = require("./GetUserResponseModelBodyItem");
var ListSymbols_1 = require("./ListSymbols");
var ListSymbolsBody_1 = require("./ListSymbolsBody");
var ListSymbolsBodyData_1 = require("./ListSymbolsBodyData");
var ListSymbolsBodyItems_1 = require("./ListSymbolsBodyItems");
var Model1yearStockdataResponseModel_1 = require("./Model1yearStockdataResponseModel");
var Model24hStockdataResponseModel_1 = require("./Model24hStockdataResponseModel");
var Model2yearsStockdataResponseModel_1 = require("./Model2yearsStockdataResponseModel");
var MtdStockdataResponseModel_1 = require("./MtdStockdataResponseModel");
var YtdStockdataResponseModel_1 = require("./YtdStockdataResponseModel");
var YtdStockdataResponseModelBody_1 = require("./YtdStockdataResponseModelBody");
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
    "GetStockdataInfoResponseModel": GetStockdataInfoResponseModel_1.GetStockdataInfoResponseModel,
    "GetStockdataInfoResponseModelBody": GetStockdataInfoResponseModelBody_1.GetStockdataInfoResponseModelBody,
    "GetStockdataInfoResponseModelBodyItem": GetStockdataInfoResponseModelBodyItem_1.GetStockdataInfoResponseModelBodyItem,
    "GetUserResponseModel": GetUserResponseModel_1.GetUserResponseModel,
    "GetUserResponseModelBody": GetUserResponseModelBody_1.GetUserResponseModelBody,
    "GetUserResponseModelBodyItem": GetUserResponseModelBodyItem_1.GetUserResponseModelBodyItem,
    "ListSymbols": ListSymbols_1.ListSymbols,
    "ListSymbolsBody": ListSymbolsBody_1.ListSymbolsBody,
    "ListSymbolsBodyData": ListSymbolsBodyData_1.ListSymbolsBodyData,
    "ListSymbolsBodyItems": ListSymbolsBodyItems_1.ListSymbolsBodyItems,
    "Model1yearStockdataResponseModel": Model1yearStockdataResponseModel_1.Model1yearStockdataResponseModel,
    "Model24hStockdataResponseModel": Model24hStockdataResponseModel_1.Model24hStockdataResponseModel,
    "Model2yearsStockdataResponseModel": Model2yearsStockdataResponseModel_1.Model2yearsStockdataResponseModel,
    "MtdStockdataResponseModel": MtdStockdataResponseModel_1.MtdStockdataResponseModel,
    "YtdStockdataResponseModel": YtdStockdataResponseModel_1.YtdStockdataResponseModel,
    "YtdStockdataResponseModelBody": YtdStockdataResponseModelBody_1.YtdStockdataResponseModelBody,
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