import { Configuration } from '../configuration';
import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';
import { DfsApiRequestFactory, DfsApiResponseProcessor } from "../apis/DfsApi";
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
export interface DfsApiV1OptionsRequest {
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
export interface DfsApiV1StockdataSymbolMtdOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbolOptionsRequest {
    symbol: string;
}
export interface DfsApiV1StockdataSymbolYtdOptionsRequest {
    symbol: string;
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
    mtdStockdata(param: DfsApiMtdStockdataRequest, options?: Configuration): Promise<MtdStockdataResponseModel>;
    oneYearStockdata(param: DfsApiOneYearStockdataRequest, options?: Configuration): Promise<Model1yearStockdataResponseModel>;
    rootOptions(param?: DfsApiRootOptionsRequest, options?: Configuration): Promise<void>;
    twentyfourHourStockdata(param: DfsApiTwentyfourHourStockdataRequest, options?: Configuration): Promise<Model24hStockdataResponseModel>;
    twoYearsStockdata(param: DfsApiTwoYearsStockdataRequest, options?: Configuration): Promise<Model2yearsStockdataResponseModel>;
    userGet(param: DfsApiUserGetRequest, options?: Configuration): Promise<GetUserResponseModel>;
    v1Options(param?: DfsApiV1OptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataOptions(param?: DfsApiV1StockdataOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbol1yearOptions(param: DfsApiV1StockdataSymbol1yearOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbol24hOptions(param: DfsApiV1StockdataSymbol24hOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbol2yearsOptions(param: DfsApiV1StockdataSymbol2yearsOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolMtdOptions(param: DfsApiV1StockdataSymbolMtdOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolOptions(param: DfsApiV1StockdataSymbolOptionsRequest, options?: Configuration): Promise<void>;
    v1StockdataSymbolYtdOptions(param: DfsApiV1StockdataSymbolYtdOptionsRequest, options?: Configuration): Promise<void>;
    v1UserOptions(param?: DfsApiV1UserOptionsRequest, options?: Configuration): Promise<void>;
    ytdStockdata(param: DfsApiYtdStockdataRequest, options?: Configuration): Promise<YtdStockdataResponseModel>;
}
