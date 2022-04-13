import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BuyAssetRequestModel } from '../models/BuyAssetRequestModel';
import { BuyAssetResponseModel } from '../models/BuyAssetResponseModel';
import { GetStockdataInfoResponseModel } from '../models/GetStockdataInfoResponseModel';
import { GetStockdataLatestResponseModel } from '../models/GetStockdataLatestResponseModel';
import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { ListSymbols } from '../models/ListSymbols';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { SellAssetRequestModel } from '../models/SellAssetRequestModel';
import { SellAssetResponseModel } from '../models/SellAssetResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';
export declare class DfsApiRequestFactory extends BaseAPIRequestFactory {
    buyAsset(apiKey: string, buyAssetRequestModel: BuyAssetRequestModel, _options?: Configuration): Promise<RequestContext>;
    getStockdataInfo(symbol: string, apiKey: string, _options?: Configuration): Promise<RequestContext>;
    getStockdataLatest(symbol: string, apiKey: string, _options?: Configuration): Promise<RequestContext>;
    listSymbols(apiKey: string, _options?: Configuration): Promise<RequestContext>;
    mtdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext>;
    oneYearStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext>;
    rootOptions(_options?: Configuration): Promise<RequestContext>;
    sellAsset(apiKey: string, sellAssetRequestModel: SellAssetRequestModel, _options?: Configuration): Promise<RequestContext>;
    twentyfourHourStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext>;
    twoYearsStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext>;
    userGet(apiKey: string, _options?: Configuration): Promise<RequestContext>;
    v1AssetsBuyOptions(_options?: Configuration): Promise<RequestContext>;
    v1AssetsOptions(_options?: Configuration): Promise<RequestContext>;
    v1AssetsSellOptions(_options?: Configuration): Promise<RequestContext>;
    v1Options(_options?: Configuration): Promise<RequestContext>;
    v1StockdataListOptions(_options?: Configuration): Promise<RequestContext>;
    v1StockdataOptions(_options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbol1yearOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbol24hOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbol2yearsOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbolLatestOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbolMtdOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbolOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1StockdataSymbolYtdOptions(symbol: string, _options?: Configuration): Promise<RequestContext>;
    v1UserOptions(_options?: Configuration): Promise<RequestContext>;
    ytdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DfsApiResponseProcessor {
    buyAsset(response: ResponseContext): Promise<BuyAssetResponseModel>;
    getStockdataInfo(response: ResponseContext): Promise<GetStockdataInfoResponseModel>;
    getStockdataLatest(response: ResponseContext): Promise<GetStockdataLatestResponseModel>;
    listSymbols(response: ResponseContext): Promise<ListSymbols>;
    mtdStockdata(response: ResponseContext): Promise<MtdStockdataResponseModel>;
    oneYearStockdata(response: ResponseContext): Promise<Model1yearStockdataResponseModel>;
    rootOptions(response: ResponseContext): Promise<void>;
    sellAsset(response: ResponseContext): Promise<SellAssetResponseModel>;
    twentyfourHourStockdata(response: ResponseContext): Promise<Model24hStockdataResponseModel>;
    twoYearsStockdata(response: ResponseContext): Promise<Model2yearsStockdataResponseModel>;
    userGet(response: ResponseContext): Promise<GetUserResponseModel>;
    v1AssetsBuyOptions(response: ResponseContext): Promise<void>;
    v1AssetsOptions(response: ResponseContext): Promise<void>;
    v1AssetsSellOptions(response: ResponseContext): Promise<void>;
    v1Options(response: ResponseContext): Promise<void>;
    v1StockdataListOptions(response: ResponseContext): Promise<void>;
    v1StockdataOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbol1yearOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbol24hOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbol2yearsOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbolLatestOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbolMtdOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbolOptions(response: ResponseContext): Promise<void>;
    v1StockdataSymbolYtdOptions(response: ResponseContext): Promise<void>;
    v1UserOptions(response: ResponseContext): Promise<void>;
    ytdStockdata(response: ResponseContext): Promise<YtdStockdataResponseModel>;
}
