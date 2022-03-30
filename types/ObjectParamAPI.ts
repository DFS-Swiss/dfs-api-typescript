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

import { ObservableDfsApi } from "./ObservableAPI";
import { DfsApiRequestFactory, DfsApiResponseProcessor} from "../apis/DfsApi";

export interface DfsApiListSymbolsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApilistSymbols
     */
    apiKey: string
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

export interface DfsApiOneYearStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApioneYearStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApioneYearStockdata
     */
    symbol: string
}

export interface DfsApiRootOptionsRequest {
}

export interface DfsApiTwentyfourHourStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApitwentyfourHourStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApitwentyfourHourStockdata
     */
    symbol: string
}

export interface DfsApiTwoYearsStockdataRequest {
    /**
     * 
     * @type string
     * @memberof DfsApitwoYearsStockdata
     */
    apiKey: string
    /**
     * 
     * @type string
     * @memberof DfsApitwoYearsStockdata
     */
    symbol: string
}

export interface DfsApiUserGetRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiuserGet
     */
    apiKey: string
}

export interface DfsApiV1OptionsRequest {
}

export interface DfsApiV1StockdataListOptionsRequest {
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

export interface DfsApiV1UserOptionsRequest {
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
    public listSymbols(param: DfsApiListSymbolsRequest, options?: Configuration): Promise<ListSymbols> {
        return this.api.listSymbols(param.apiKey,  options).toPromise();
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
    public oneYearStockdata(param: DfsApiOneYearStockdataRequest, options?: Configuration): Promise<Model1yearStockdataResponseModel> {
        return this.api.oneYearStockdata(param.apiKey, param.symbol,  options).toPromise();
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
    public twentyfourHourStockdata(param: DfsApiTwentyfourHourStockdataRequest, options?: Configuration): Promise<Model24hStockdataResponseModel> {
        return this.api.twentyfourHourStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public twoYearsStockdata(param: DfsApiTwoYearsStockdataRequest, options?: Configuration): Promise<Model2yearsStockdataResponseModel> {
        return this.api.twoYearsStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public userGet(param: DfsApiUserGetRequest, options?: Configuration): Promise<GetUserResponseModel> {
        return this.api.userGet(param.apiKey,  options).toPromise();
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
    public v1StockdataListOptions(param: DfsApiV1StockdataListOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1StockdataListOptions( options).toPromise();
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
    public v1UserOptions(param: DfsApiV1UserOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1UserOptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ytdStockdata(param: DfsApiYtdStockdataRequest, options?: Configuration): Promise<YtdStockdataResponseModel> {
        return this.api.ytdStockdata(param.apiKey, param.symbol,  options).toPromise();
    }

}
