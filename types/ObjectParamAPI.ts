import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BuyAssetRequestModel } from '../models/BuyAssetRequestModel';
import { BuyAssetResponseModel } from '../models/BuyAssetResponseModel';
import { GetAvaliableAssetsResponseModel } from '../models/GetAvaliableAssetsResponseModel';
import { GetAvaliableAssetsResponseModelBody } from '../models/GetAvaliableAssetsResponseModelBody';
import { GetAvaliableAssetsResponseModelBodyItems } from '../models/GetAvaliableAssetsResponseModelBodyItems';
import { GetAvaliableBalanceResponseModel } from '../models/GetAvaliableBalanceResponseModel';
import { GetAvaliableBalanceResponseModelBody } from '../models/GetAvaliableBalanceResponseModelBody';
import { GetAvaliableBalanceResponseModelBodyItem } from '../models/GetAvaliableBalanceResponseModelBodyItem';
import { GetStockdataInfoResponseModel } from '../models/GetStockdataInfoResponseModel';
import { GetStockdataInfoResponseModelBody } from '../models/GetStockdataInfoResponseModelBody';
import { GetStockdataInfoResponseModelBodyItem } from '../models/GetStockdataInfoResponseModelBodyItem';
import { GetStockdataLatestResponseModel } from '../models/GetStockdataLatestResponseModel';
import { GetStockdataLatestResponseModelBody } from '../models/GetStockdataLatestResponseModelBody';
import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { GetUserResponseModelBody } from '../models/GetUserResponseModelBody';
import { GetUserResponseModelBodyItem } from '../models/GetUserResponseModelBodyItem';
import { ListSymbols } from '../models/ListSymbols';
import { ListSymbolsBody } from '../models/ListSymbolsBody';
import { ListSymbolsBodyItems } from '../models/ListSymbolsBodyItems';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model1yearStockdataResponseModelBody } from '../models/Model1yearStockdataResponseModelBody';
import { Model1yearStockdataResponseModelBodyItems } from '../models/Model1yearStockdataResponseModelBodyItems';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { SellAssetRequestModel } from '../models/SellAssetRequestModel';
import { SellAssetResponseModel } from '../models/SellAssetResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';

import { ObservableDfsApi } from "./ObservableAPI";
import { DfsApiRequestFactory, DfsApiResponseProcessor} from "../apis/DfsApi";

export interface DfsApiBuyAssetRequest {
    /**
     * 
     * @type string
     * @memberof DfsApibuyAsset
     */
    apiKey: string
    /**
     * 
     * @type BuyAssetRequestModel
     * @memberof DfsApibuyAsset
     */
    buyAssetRequestModel: BuyAssetRequestModel
}

export interface DfsApiGetAvaliableAssetsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApigetAvaliableAssets
     */
    apiKey: string
}

export interface DfsApiGetAvaliableBalanceRequest {
    /**
     * 
     * @type string
     * @memberof DfsApigetAvaliableBalance
     */
    apiKey: string
}

export interface DfsApiGetStockdataInfoRequest {
    /**
     * 
     * @type string
     * @memberof DfsApigetStockdataInfo
     */
    symbol: string
    /**
     * 
     * @type string
     * @memberof DfsApigetStockdataInfo
     */
    apiKey: string
}

export interface DfsApiGetStockdataLatestRequest {
    /**
     * 
     * @type string
     * @memberof DfsApigetStockdataLatest
     */
    symbol: string
    /**
     * 
     * @type string
     * @memberof DfsApigetStockdataLatest
     */
    apiKey: string
}

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

export interface DfsApiSellAssetRequest {
    /**
     * 
     * @type string
     * @memberof DfsApisellAsset
     */
    apiKey: string
    /**
     * 
     * @type SellAssetRequestModel
     * @memberof DfsApisellAsset
     */
    sellAssetRequestModel: SellAssetRequestModel
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

export interface DfsApiV1StockdataSymbolLatestOptionsRequest {
    /**
     * 
     * @type string
     * @memberof DfsApiv1StockdataSymbolLatestOptions
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

export interface DfsApiV1UserAssetsOptionsRequest {
}

export interface DfsApiV1UserBalanceOptionsRequest {
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
    public buyAsset(param: DfsApiBuyAssetRequest, options?: Configuration): Promise<BuyAssetResponseModel> {
        return this.api.buyAsset(param.apiKey, param.buyAssetRequestModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAvaliableAssets(param: DfsApiGetAvaliableAssetsRequest, options?: Configuration): Promise<GetAvaliableAssetsResponseModel> {
        return this.api.getAvaliableAssets(param.apiKey,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAvaliableBalance(param: DfsApiGetAvaliableBalanceRequest, options?: Configuration): Promise<GetAvaliableBalanceResponseModel> {
        return this.api.getAvaliableBalance(param.apiKey,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getStockdataInfo(param: DfsApiGetStockdataInfoRequest, options?: Configuration): Promise<GetStockdataInfoResponseModel> {
        return this.api.getStockdataInfo(param.symbol, param.apiKey,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getStockdataLatest(param: DfsApiGetStockdataLatestRequest, options?: Configuration): Promise<GetStockdataLatestResponseModel> {
        return this.api.getStockdataLatest(param.symbol, param.apiKey,  options).toPromise();
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
    public sellAsset(param: DfsApiSellAssetRequest, options?: Configuration): Promise<SellAssetResponseModel> {
        return this.api.sellAsset(param.apiKey, param.sellAssetRequestModel,  options).toPromise();
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
    public v1AssetsBuyOptions(param: DfsApiV1AssetsBuyOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1AssetsBuyOptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetsOptions(param: DfsApiV1AssetsOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1AssetsOptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AssetsSellOptions(param: DfsApiV1AssetsSellOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1AssetsSellOptions( options).toPromise();
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
    public v1StockdataSymbolLatestOptions(param: DfsApiV1StockdataSymbolLatestOptionsRequest, options?: Configuration): Promise<void> {
        return this.api.v1StockdataSymbolLatestOptions(param.symbol,  options).toPromise();
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
    public v1UserAssetsOptions(param: DfsApiV1UserAssetsOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1UserAssetsOptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1UserBalanceOptions(param: DfsApiV1UserBalanceOptionsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.v1UserBalanceOptions( options).toPromise();
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
