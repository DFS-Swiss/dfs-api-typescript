import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { GetStockdataInfoResponseModel } from '../models/GetStockdataInfoResponseModel';
import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { ListSymbols } from '../models/ListSymbols';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';
import { DfsApiRequestFactory, DfsApiResponseProcessor } from "../apis/DfsApi";
export declare class ObservableDfsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DfsApiRequestFactory, responseProcessor?: DfsApiResponseProcessor);
    getStockdataInfo(symbol: string, apiKey: string, _options?: Configuration): Observable<GetStockdataInfoResponseModel>;
    listSymbols(apiKey: string, _options?: Configuration): Observable<ListSymbols>;
    mtdStockdata(apiKey: string, symbol: string, _options?: Configuration): Observable<MtdStockdataResponseModel>;
    oneYearStockdata(apiKey: string, symbol: string, _options?: Configuration): Observable<Model1yearStockdataResponseModel>;
    rootOptions(_options?: Configuration): Observable<void>;
    twentyfourHourStockdata(apiKey: string, symbol: string, _options?: Configuration): Observable<Model24hStockdataResponseModel>;
    twoYearsStockdata(apiKey: string, symbol: string, _options?: Configuration): Observable<Model2yearsStockdataResponseModel>;
    userGet(apiKey: string, _options?: Configuration): Observable<GetUserResponseModel>;
    v1Options(_options?: Configuration): Observable<void>;
    v1StockdataListOptions(_options?: Configuration): Observable<void>;
    v1StockdataOptions(_options?: Configuration): Observable<void>;
    v1StockdataSymbol1yearOptions(symbol: string, _options?: Configuration): Observable<void>;
    v1StockdataSymbol24hOptions(symbol: string, _options?: Configuration): Observable<void>;
    v1StockdataSymbol2yearsOptions(symbol: string, _options?: Configuration): Observable<void>;
    v1StockdataSymbolMtdOptions(symbol: string, _options?: Configuration): Observable<void>;
    v1StockdataSymbolOptions(symbol: string, _options?: Configuration): Observable<void>;
    v1StockdataSymbolYtdOptions(symbol: string, _options?: Configuration): Observable<void>;
    v1UserOptions(_options?: Configuration): Observable<void>;
    ytdStockdata(apiKey: string, symbol: string, _options?: Configuration): Observable<YtdStockdataResponseModel>;
}
