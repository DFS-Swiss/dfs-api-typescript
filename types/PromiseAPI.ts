import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { GetUserResponseModelBody } from '../models/GetUserResponseModelBody';
import { GetUserResponseModelBodyItem } from '../models/GetUserResponseModelBodyItem';
import { ListSymbols } from '../models/ListSymbols';
import { ListSymbolsBody } from '../models/ListSymbolsBody';
import { ListSymbolsBodyData } from '../models/ListSymbolsBodyData';
import { ListSymbolsBodyItems } from '../models/ListSymbolsBodyItems';
import { ListSymbolsBodySymbol } from '../models/ListSymbolsBodySymbol';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';
import { YtdStockdataResponseModelBody } from '../models/YtdStockdataResponseModelBody';
import { ObservableDfsApi } from './ObservableAPI';

import { DfsApiRequestFactory, DfsApiResponseProcessor} from "../apis/DfsApi";
export class PromiseDfsApi {
    private api: ObservableDfsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DfsApiRequestFactory,
        responseProcessor?: DfsApiResponseProcessor
    ) {
        this.api = new ObservableDfsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param apiKey 
     */
    public listSymbols(apiKey: string, _options?: Configuration): Promise<ListSymbols> {
        const result = this.api.listSymbols(apiKey, _options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public mtdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<MtdStockdataResponseModel> {
        const result = this.api.mtdStockdata(apiKey, symbol, _options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public oneYearStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<Model1yearStockdataResponseModel> {
        const result = this.api.oneYearStockdata(apiKey, symbol, _options);
        return result.toPromise();
    }

    /**
     */
    public rootOptions(_options?: Configuration): Promise<void> {
        const result = this.api.rootOptions(_options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public twentyfourHourStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<Model24hStockdataResponseModel> {
        const result = this.api.twentyfourHourStockdata(apiKey, symbol, _options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public twoYearsStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<Model2yearsStockdataResponseModel> {
        const result = this.api.twoYearsStockdata(apiKey, symbol, _options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     */
    public userGet(apiKey: string, _options?: Configuration): Promise<GetUserResponseModel> {
        const result = this.api.userGet(apiKey, _options);
        return result.toPromise();
    }

    /**
     */
    public v1Options(_options?: Configuration): Promise<void> {
        const result = this.api.v1Options(_options);
        return result.toPromise();
    }

    /**
     */
    public v1StockdataListOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataListOptions(_options);
        return result.toPromise();
    }

    /**
     */
    public v1StockdataOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataOptions(_options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     */
    public v1StockdataSymbol1yearOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbol1yearOptions(symbol, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     */
    public v1StockdataSymbol24hOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbol24hOptions(symbol, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     */
    public v1StockdataSymbol2yearsOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbol2yearsOptions(symbol, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     */
    public v1StockdataSymbolMtdOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbolMtdOptions(symbol, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     */
    public v1StockdataSymbolOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbolOptions(symbol, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     */
    public v1StockdataSymbolYtdOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbolYtdOptions(symbol, _options);
        return result.toPromise();
    }

    /**
     */
    public v1UserOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1UserOptions(_options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public ytdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<YtdStockdataResponseModel> {
        const result = this.api.ytdStockdata(apiKey, symbol, _options);
        return result.toPromise();
    }


}



