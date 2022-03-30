"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDfsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDfsApi = (function () {
    function ObjectDfsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDfsApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDfsApi.prototype.listSymbols = function (param, options) {
        return this.api.listSymbols(param.apiKey, options).toPromise();
    };
    ObjectDfsApi.prototype.mtdStockdata = function (param, options) {
        return this.api.mtdStockdata(param.apiKey, param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.oneYearStockdata = function (param, options) {
        return this.api.oneYearStockdata(param.apiKey, param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.rootOptions = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.rootOptions(options).toPromise();
    };
    ObjectDfsApi.prototype.twentyfourHourStockdata = function (param, options) {
        return this.api.twentyfourHourStockdata(param.apiKey, param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.twoYearsStockdata = function (param, options) {
        return this.api.twoYearsStockdata(param.apiKey, param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.userGet = function (param, options) {
        return this.api.userGet(param.apiKey, options).toPromise();
    };
    ObjectDfsApi.prototype.v1Options = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1Options(options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataListOptions = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1StockdataListOptions(options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataOptions = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1StockdataOptions(options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataSymbol1yearOptions = function (param, options) {
        return this.api.v1StockdataSymbol1yearOptions(param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataSymbol24hOptions = function (param, options) {
        return this.api.v1StockdataSymbol24hOptions(param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataSymbol2yearsOptions = function (param, options) {
        return this.api.v1StockdataSymbol2yearsOptions(param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataSymbolMtdOptions = function (param, options) {
        return this.api.v1StockdataSymbolMtdOptions(param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataSymbolOptions = function (param, options) {
        return this.api.v1StockdataSymbolOptions(param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.v1StockdataSymbolYtdOptions = function (param, options) {
        return this.api.v1StockdataSymbolYtdOptions(param.symbol, options).toPromise();
    };
    ObjectDfsApi.prototype.v1UserOptions = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.v1UserOptions(options).toPromise();
    };
    ObjectDfsApi.prototype.ytdStockdata = function (param, options) {
        return this.api.ytdStockdata(param.apiKey, param.symbol, options).toPromise();
    };
    return ObjectDfsApi;
}());
exports.ObjectDfsApi = ObjectDfsApi;
//# sourceMappingURL=ObjectParamAPI.js.map