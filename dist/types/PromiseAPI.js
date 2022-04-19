"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDfsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseDfsApi = (function () {
    function PromiseDfsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDfsApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDfsApi.prototype.buyAsset = function (apiKey, buyAssetRequestModel, _options) {
        var result = this.api.buyAsset(apiKey, buyAssetRequestModel, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.getAvaliableAssets = function (apiKey, _options) {
        var result = this.api.getAvaliableAssets(apiKey, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.getAvaliableBalance = function (apiKey, _options) {
        var result = this.api.getAvaliableBalance(apiKey, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.getStockdataInfo = function (symbol, apiKey, _options) {
        var result = this.api.getStockdataInfo(symbol, apiKey, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.getStockdataLatest = function (symbol, apiKey, _options) {
        var result = this.api.getStockdataLatest(symbol, apiKey, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.listSymbols = function (apiKey, _options) {
        var result = this.api.listSymbols(apiKey, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.mtdStockdata = function (apiKey, symbol, _options) {
        var result = this.api.mtdStockdata(apiKey, symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.oneYearStockdata = function (apiKey, symbol, _options) {
        var result = this.api.oneYearStockdata(apiKey, symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.rootOptions = function (_options) {
        var result = this.api.rootOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.sellAsset = function (apiKey, sellAssetRequestModel, _options) {
        var result = this.api.sellAsset(apiKey, sellAssetRequestModel, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.twentyfourHourStockdata = function (apiKey, symbol, _options) {
        var result = this.api.twentyfourHourStockdata(apiKey, symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.twoYearsStockdata = function (apiKey, symbol, _options) {
        var result = this.api.twoYearsStockdata(apiKey, symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.userGet = function (apiKey, _options) {
        var result = this.api.userGet(apiKey, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1AssetsBuyOptions = function (_options) {
        var result = this.api.v1AssetsBuyOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1AssetsOptions = function (_options) {
        var result = this.api.v1AssetsOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1AssetsSellOptions = function (_options) {
        var result = this.api.v1AssetsSellOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1Options = function (_options) {
        var result = this.api.v1Options(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataListOptions = function (_options) {
        var result = this.api.v1StockdataListOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataOptions = function (_options) {
        var result = this.api.v1StockdataOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbol1yearOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbol1yearOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbol24hOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbol24hOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbol2yearsOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbol2yearsOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbolLatestOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbolLatestOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbolMtdOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbolMtdOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbolOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbolOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1StockdataSymbolYtdOptions = function (symbol, _options) {
        var result = this.api.v1StockdataSymbolYtdOptions(symbol, _options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1UserAssetsOptions = function (_options) {
        var result = this.api.v1UserAssetsOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1UserBalanceOptions = function (_options) {
        var result = this.api.v1UserBalanceOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.v1UserOptions = function (_options) {
        var result = this.api.v1UserOptions(_options);
        return result.toPromise();
    };
    PromiseDfsApi.prototype.ytdStockdata = function (apiKey, symbol, _options) {
        var result = this.api.ytdStockdata(apiKey, symbol, _options);
        return result.toPromise();
    };
    return PromiseDfsApi;
}());
exports.PromiseDfsApi = PromiseDfsApi;
//# sourceMappingURL=PromiseAPI.js.map