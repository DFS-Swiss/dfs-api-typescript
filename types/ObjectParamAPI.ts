import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';
import { YtdStockdataResponseModelBody } from '../models/YtdStockdataResponseModelBody';
import { YtdStockdataResponseModelBodyItem } from '../models/YtdStockdataResponseModelBodyItem';

import { ObservableDfsApi } from "./ObservableAPI";
import { DfsApiRequestFactory, DfsApiResponseProcessor} from "../apis/DfsApi";

export interface DfsApi1yearStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApi1yearStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApi1yearStockdata
     */
    symbol: string
}

export interface DfsApi24hStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApi24hStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApi24hStockdata
     */
    symbol: string
}

export interface DfsApi2yearsStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApi2yearsStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApi2yearsStockdata
     */
    symbol: string
}

export interface DfsApiMtdStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApimtdStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApimtdStockdata
     */
    symbol: string
}

export interface DfsApiRootOptionsRequest {
}

export interface DfsApiV1OptionsRequest {
}

export interface DfsApiV1StockdataOptionsRequest {
}

export interface DfsApiV1StockdataSymbol1yearOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbol1yearOptions
     */
    symbol: string
}

export interface DfsApiV1StockdataSymbol24hOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbol24hOptions
     */
    symbol: string
}

export interface DfsApiV1StockdataSymbol2yearsOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbol2yearsOptions
     */
    symbol: string
}

export interface DfsApiV1StockdataSymbolMtdOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbolMtdOptions
     */
    symbol: string
}

export interface DfsApiV1StockdataSymbolOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbolOptions
     */
    symbol: string
}

export interface DfsApiV1StockdataSymbolYtdOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbolYtdOptions
     */
    symbol: string
}

export interface DfsApiYtdStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiytdStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApiytdStockdata
     */
    symbol: string
}

export class ObjectDfsApi {
    private api: ObservableDfsApi

    public constructor(configuration: Configuration, requestFactory?: DfsApiRequestFactory, responseProcessor?: DfsApiResponseProcessor) {
        this.api = new ObservableDfsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public 1yearStockdata(param: DfsApi1yearStockdataRequest, options?: Configuration): Promise<Model1yearStockdataResponseModel> {
        return this.api.1yearStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public 24hStockdata(param: DfsApi24hStockdataRequest, options?: Configuration): Promise<Model24hStockdataResponseModel> {
        return this.api.24hStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public 2yearsStockdata(param: DfsApi2yearsStockdataRequest, options?: Configuration): Promise<Model2yearsStockdataResponseModel> {
        return this.api.2yearsStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public mtdStockdata(param: DfsApiMtdStockdataRequest, options?: Configuration): Promise<MtdStockdataResponseModel> {
        return this.api.mtdStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public rootOptions(param: DfsApiRootOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.rootOptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1Options(param: DfsApiV1OptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1Options( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataOptions(param: DfsApiV1StockdataOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1StockdataOptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataSymbol1yearOptions(param: DfsApiV1StockdataSymbol1yearOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbol1yearOptions(param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataSymbol24hOptions(param: DfsApiV1StockdataSymbol24hOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbol24hOptions(param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataSymbol2yearsOptions(param: DfsApiV1StockdataSymbol2yearsOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbol2yearsOptions(param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataSymbolMtdOptions(param: DfsApiV1StockdataSymbolMtdOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbolMtdOptions(param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataSymbolOptions(param: DfsApiV1StockdataSymbolOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbolOptions(param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1StockdataSymbolYtdOptions(param: DfsApiV1StockdataSymbolYtdOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbolYtdOptions(param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ytdStockdata(param: DfsApiYtdStockdataRequest, options?: Configuration): Promise<YtdStockdataResponseModel> {
        return this.api.ytdStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

}
