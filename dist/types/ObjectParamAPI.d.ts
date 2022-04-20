import { Configuration } from '../configuration';
import { BuyAssetRequestModel } from '../models/BuyAssetRequestModel';
import { BuyAssetResponseModel } from '../models/BuyAssetResponseModel';
import { GetAvaliableAssetsResponseModel } from '../models/GetAvaliableAssetsResponseModel';
import { GetAvaliableBalanceResponseModel } from '../models/GetAvaliableBalanceResponseModel';
import { GetBalanceHistoryResponseModel } from '../models/GetBalanceHistoryResponseModel';
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
import { DfsApiRequestFactory, DfsApiResponseProcessor } from "../apis/DfsApi";
export interface DfsApiBuyAssetRequest {
    apiKey: string;
    buyAssetRequestModel: BuyAssetRequestModel;
}
export interface DfsApiGetAvaliableAssetsRequest {
    apiKey: string;
}
export interface DfsApiGetAvaliableBalanceRequest {
    apiKey: string;
}
export interface DfsApiGetBalanceHistoryRequest {
    apiKey: string;
}
export interface DfsApiGetStockdataInfoRequest {
    symbol: string;
    apiKey: string;
}
export interface DfsApiGetStockdataLatestRequest {
    symbol: string;
    apiKey: string;
}
export interface DfsApiListSymbolsRequest {
    apiKey: string;
}
export interface DfsApiMtdStockdataRequest {
    apiKey: string;
    symbol: string;
}
export interface DfsApiOneYearStockdataRequest {
    apiKey: string;
    symbol: string;
}
export interface DfsApiRootOptionsRequest {
}
export interface DfsApiSellAssetRequest {
    apiKey: string;
    sellAssetRequestModel: SellAssetRequestModel;
}
export interface DfsApiTwentyfourHourStockdataRequest {
    apiKey: string;
    symbol: string;
}
export interface DfsApiTwoYearsStockdataRequest {
    apiKey: string;
    symbol: string;
}
export interface DfsApiUserGetRequest {
    apiKey: string;
}
export interface DfsApiV1AssetsBuyOptionsRequest {
}
export interface DfsApiV1AssetsOptionsRequest {
}
export interface DfsApiV1AssetsSellOptionsRequest {
}
export interface DfsApiV1OptionsRequest {
}
export interface DfsApiV1StockdataListOptionsRequest {
}
export interface DfsApiV1StockdataOptionsRequest {
}
export interface DfsApiV1StockdataSymbol1yearOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbol24hOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbol2yearsOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbolLatestOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbolMtdOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbolOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbolYtdOptionsRequest {
    symbol: string;
}
export interface DfsApiV1UserAssetsOptionsRequest {
}
export interface DfsApiV1UserBalanceHistoryOptionsRequest {
}
export interface DfsApiV1UserBalanceOptionsRequest {
}
export interface DfsApiV1UserOptionsRequest {
}
export interface DfsApiYtdStockdataRequest {
    apiKey: string;
    symbol: string;
}
export declare class ObjectDfsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DfsApiRequestFactory, responseProcessor?: DfsApiResponseProcessor);
    buyAsset(param: DfsApiBuyAssetRequest, options?: Configuration): Promise<BuyAssetResponseModel>;
    getAvaliableAssets(param: DfsApiGetAvaliableAssetsRequest, options?: Configuration): Promise<GetAvaliableAssetsResponseModel>;
    getAvaliableBalance(param: DfsApiGetAvaliableBalanceRequest, options?: Configuration): Promise<GetAvaliableBalanceResponseModel>;
    getBalanceHistory(param: DfsApiGetBalanceHistoryRequest, options?: Configuration): Promise<GetBalanceHistoryResponseModel>;
    getStockdataInfo(param: DfsApiGetStockdataInfoRequest, options?: Configuration): Promise<GetStockdataInfoResponseModel>;
    getStockdataLatest(param: DfsApiGetStockdataLatestRequest, options?: Configuration): Promise<GetStockdataLatestResponseModel>;
    listSymbols(param: DfsApiListSymbolsRequest, options?: Configuration): Promise<ListSymbols>;
    mtdStockdata(param: DfsApiMtdStockdataRequest, options?: Configuration): Promise<MtdStockdataResponseModel>;
    oneYearStockdata(param: DfsApiOneYearStockdataRequest, options?: Configuration): Promise<Model1yearStockdataResponseModel>;
    rootOptions(param?: DfsApiRootOptionsRequest, options?: Configuration): Promise<void>;
    sellAsset(param: DfsApiSellAssetRequest, options?: Configuration): Promise<SellAssetResponseModel>;
    twentyfourHourStockdata(param: DfsApiTwentyfourHourStockdataRequest, options?: Configuration): Promise<Model24hStockdataResponseModel>;
    twoYearsStockdata(param: DfsApiTwoYearsStockdataRequest, options?: Configuration): Promise<Model2yearsStockdataResponseModel>;
    userGet(param: DfsApiUserGetRequest, options?: Configuration): Promise<GetUserResponseModel>;
    v1AssetsBuyOptions(param?: DfsApiV1AssetsBuyOptionsRequest, options?: Configuration): Promise<void>;
    v1AssetsOptions(param?: DfsApiV1AssetsOptionsRequest, options?: Configuration): Promise<void>;
    v1AssetsSellOptions(param?: DfsApiV1AssetsSellOptionsRequest, options?: Configuration): Promise<void>;
    v1Options(param?: DfsApiV1OptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataListOptions(param?: DfsApiV1StockdataListOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataOptions(param?: DfsApiV1StockdataOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbol1yearOptions(param: DfsApiV1StockdataSymbol1yearOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbol24hOptions(param: DfsApiV1StockdataSymbol24hOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbol2yearsOptions(param: DfsApiV1StockdataSymbol2yearsOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolLatestOptions(param: DfsApiV1StockdataSymbolLatestOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolMtdOptions(param: DfsApiV1StockdataSymbolMtdOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolOptions(param: DfsApiV1StockdataSymbolOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolYtdOptions(param: DfsApiV1StockdataSymbolYtdOptionsRequest, options?: Configuration): Promise<void>;
    v1UserAssetsOptions(param?: DfsApiV1UserAssetsOptionsRequest, options?: Configuration): Promise<void>;
    v1UserBalanceHistoryOptions(param?: DfsApiV1UserBalanceHistoryOptionsRequest, options?: Configuration): Promise<void>;
    v1UserBalanceOptions(param?: DfsApiV1UserBalanceOptionsRequest, options?: Configuration): Promise<void>;
    v1UserOptions(param?: DfsApiV1UserOptionsRequest, options?: Configuration): Promise<void>;
    ytdStockdata(param: DfsApiYtdStockdataRequest, options?: Configuration): Promise<YtdStockdataResponseModel>;
}
