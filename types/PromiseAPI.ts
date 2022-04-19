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
     * @param buyAssetRequestModel 
     */
    public buyAsset(apiKey: string, buyAssetRequestModel: BuyAssetRequestModel, _options?: Configuration): Promise<BuyAssetResponseModel> {
        const result = this.api.buyAsset(apiKey, buyAssetRequestModel, _options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     */
    public getAvaliableAssets(apiKey: string, _options?: Configuration): Promise<GetAvaliableAssetsResponseModel> {
        const result = this.api.getAvaliableAssets(apiKey, _options);
        return result.toPromise();
    }

    /**
     * @param apiKey 
     */
    public getAvaliableBalance(apiKey: string, _options?: Configuration): Promise<GetAvaliableBalanceResponseModel> {
        const result = this.api.getAvaliableBalance(apiKey, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     * @param apiKey 
     */
    public getStockdataInfo(symbol: string, apiKey: string, _options?: Configuration): Promise<GetStockdataInfoResponseModel> {
        const result = this.api.getStockdataInfo(symbol, apiKey, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     * @param apiKey 
     */
    public getStockdataLatest(symbol: string, apiKey: string, _options?: Configuration): Promise<GetStockdataLatestResponseModel> {
        const result = this.api.getStockdataLatest(symbol, apiKey, _options);
        return result.toPromise();
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
     * @param sellAssetRequestModel 
     */
    public sellAsset(apiKey: string, sellAssetRequestModel: SellAssetRequestModel, _options?: Configuration): Promise<SellAssetResponseModel> {
        const result = this.api.sellAsset(apiKey, sellAssetRequestModel, _options);
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
    public v1AssetsBuyOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1AssetsBuyOptions(_options);
        return result.toPromise();
    }

    /**
     */
    public v1AssetsOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1AssetsOptions(_options);
        return result.toPromise();
    }

    /**
     */
    public v1AssetsSellOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1AssetsSellOptions(_options);
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
    public v1StockdataSymbolLatestOptions(symbol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1StockdataSymbolLatestOptions(symbol, _options);
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
    public v1UserAssetsOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1UserAssetsOptions(_options);
        return result.toPromise();
    }

    /**
     */
    public v1UserBalanceOptions(_options?: Configuration): Promise<void> {
        const result = this.api.v1UserBalanceOptions(_options);
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



