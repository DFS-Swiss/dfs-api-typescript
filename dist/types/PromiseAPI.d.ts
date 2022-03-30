import { Configuration } from '../configuration';
import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { ListSymbols } from '../models/ListSymbols';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';
import { DfsApiRequestFactory, DfsApiResponseProcessor } from "../apis/DfsApi";
export declare class PromiseDfsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DfsApiRequestFactory, responseProcessor?: DfsApiResponseProcessor);
    listSymbols(apiKey: string, _options?: Configuration): Promise<ListSymbols>;
    mtdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<MtdStockdataResponseModel>;
    oneYearStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<Model1yearStockdataResponseModel>;
    rootOptions(_options?: Configuration): Promise<void>;
    twentyfourHourStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<Model24hStockdataResponseModel>;
    twoYearsStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<Model2yearsStockdataResponseModel>;
    userGet(apiKey: string, _options?: Configuration): Promise<GetUserResponseModel>;
    v1Options(_options?: Configuration): Promise<void>;
    v1StockdataListOptions(_options?: Configuration): Promise<void>;
    v1StockdataOptions(_options?: Configuration): Promise<void>;
    v1StockdataSymbol1yearOptions(symbol: string, _options?: Configuration): Promise<void>;
    v1StockdataSymbol24hOptions(symbol: string, _options?: Configuration): Promise<void>;
    v1StockdataSymbol2yearsOptions(symbol: string, _options?: Configuration): Promise<void>;
    v1StockdataSymbolMtdOptions(symbol: string, _options?: Configuration): Promise<void>;
    v1StockdataSymbolOptions(symbol: string, _options?: Configuration): Promise<void>;
    v1StockdataSymbolYtdOptions(symbol: string, _options?: Configuration): Promise<void>;
    v1UserOptions(_options?: Configuration): Promise<void>;
    ytdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<YtdStockdataResponseModel>;
}
