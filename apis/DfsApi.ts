// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetUserResponseModel } from '../models/GetUserResponseModel';
import { ListSymbols } from '../models/ListSymbols';
import { Model1yearStockdataResponseModel } from '../models/Model1yearStockdataResponseModel';
import { Model24hStockdataResponseModel } from '../models/Model24hStockdataResponseModel';
import { Model2yearsStockdataResponseModel } from '../models/Model2yearsStockdataResponseModel';
import { MtdStockdataResponseModel } from '../models/MtdStockdataResponseModel';
import { YtdStockdataResponseModel } from '../models/YtdStockdataResponseModel';

/**
 * no description
 */
export class DfsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param apiKey 
     */
    public async listSymbols(apiKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "listSymbols", "apiKey");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public async mtdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "mtdStockdata", "apiKey");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "mtdStockdata", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/mtd'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public async oneYearStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "oneYearStockdata", "apiKey");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "oneYearStockdata", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/1year'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async rootOptions(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public async twentyfourHourStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "twentyfourHourStockdata", "apiKey");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "twentyfourHourStockdata", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/24h'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public async twoYearsStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "twoYearsStockdata", "apiKey");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "twoYearsStockdata", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/2years'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param apiKey 
     */
    public async userGet(apiKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "userGet", "apiKey");
        }


        // Path Params
        const localVarPath = '/v1/user';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["proddfsswisscognitoAuthorizer029DC9BB"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async v1Options(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async v1StockdataListOptions(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/stockdata/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async v1StockdataOptions(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/stockdata';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param symbol 
     */
    public async v1StockdataSymbol1yearOptions(symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "v1StockdataSymbol1yearOptions", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/1year'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param symbol 
     */
    public async v1StockdataSymbol24hOptions(symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "v1StockdataSymbol24hOptions", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/24h'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param symbol 
     */
    public async v1StockdataSymbol2yearsOptions(symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "v1StockdataSymbol2yearsOptions", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/2years'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param symbol 
     */
    public async v1StockdataSymbolMtdOptions(symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "v1StockdataSymbolMtdOptions", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/mtd'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param symbol 
     */
    public async v1StockdataSymbolOptions(symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "v1StockdataSymbolOptions", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param symbol 
     */
    public async v1StockdataSymbolYtdOptions(symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "v1StockdataSymbolYtdOptions", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/ytd'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async v1UserOptions(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/user';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.OPTIONS);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param apiKey 
     * @param symbol 
     */
    public async ytdStockdata(apiKey: string, symbol: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("DfsApi", "ytdStockdata", "apiKey");
        }


        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DfsApi", "ytdStockdata", "symbol");
        }


        // Path Params
        const localVarPath = '/v1/stockdata/{symbol}/ytd'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DfsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSymbols
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSymbols(response: ResponseContext): Promise<ListSymbols > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            throw new ApiException<ListSymbols>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            throw new ApiException<ListSymbols>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            throw new ApiException<ListSymbols>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            throw new ApiException<ListSymbols>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            throw new ApiException<ListSymbols>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListSymbols = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSymbols", ""
            ) as ListSymbols;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to mtdStockdata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async mtdStockdata(response: ResponseContext): Promise<MtdStockdataResponseModel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            throw new ApiException<MtdStockdataResponseModel>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            throw new ApiException<MtdStockdataResponseModel>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            throw new ApiException<MtdStockdataResponseModel>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            throw new ApiException<MtdStockdataResponseModel>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            throw new ApiException<MtdStockdataResponseModel>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MtdStockdataResponseModel", ""
            ) as MtdStockdataResponseModel;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oneYearStockdata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async oneYearStockdata(response: ResponseContext): Promise<Model1yearStockdataResponseModel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            throw new ApiException<Model1yearStockdataResponseModel>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            throw new ApiException<Model1yearStockdataResponseModel>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            throw new ApiException<Model1yearStockdataResponseModel>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            throw new ApiException<Model1yearStockdataResponseModel>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            throw new ApiException<Model1yearStockdataResponseModel>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Model1yearStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model1yearStockdataResponseModel", ""
            ) as Model1yearStockdataResponseModel;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rootOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rootOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to twentyfourHourStockdata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async twentyfourHourStockdata(response: ResponseContext): Promise<Model24hStockdataResponseModel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            throw new ApiException<Model24hStockdataResponseModel>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            throw new ApiException<Model24hStockdataResponseModel>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            throw new ApiException<Model24hStockdataResponseModel>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            throw new ApiException<Model24hStockdataResponseModel>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            throw new ApiException<Model24hStockdataResponseModel>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Model24hStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model24hStockdataResponseModel", ""
            ) as Model24hStockdataResponseModel;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to twoYearsStockdata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async twoYearsStockdata(response: ResponseContext): Promise<Model2yearsStockdataResponseModel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            throw new ApiException<Model2yearsStockdataResponseModel>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            throw new ApiException<Model2yearsStockdataResponseModel>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            throw new ApiException<Model2yearsStockdataResponseModel>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            throw new ApiException<Model2yearsStockdataResponseModel>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            throw new ApiException<Model2yearsStockdataResponseModel>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Model2yearsStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Model2yearsStockdataResponseModel", ""
            ) as Model2yearsStockdataResponseModel;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to userGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async userGet(response: ResponseContext): Promise<GetUserResponseModel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            throw new ApiException<GetUserResponseModel>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            throw new ApiException<GetUserResponseModel>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            throw new ApiException<GetUserResponseModel>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            throw new ApiException<GetUserResponseModel>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            throw new ApiException<GetUserResponseModel>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetUserResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetUserResponseModel", ""
            ) as GetUserResponseModel;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1Options
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1Options(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataListOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataListOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataSymbol1yearOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataSymbol1yearOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataSymbol24hOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataSymbol24hOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataSymbol2yearsOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataSymbol2yearsOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataSymbolMtdOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataSymbolMtdOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataSymbolOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataSymbolOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1StockdataSymbolYtdOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1StockdataSymbolYtdOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UserOptions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserOptions(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ytdStockdata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ytdStockdata(response: ResponseContext): Promise<YtdStockdataResponseModel > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            throw new ApiException<YtdStockdataResponseModel>(400, "400 response", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            throw new ApiException<YtdStockdataResponseModel>(401, "401 response", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            throw new ApiException<YtdStockdataResponseModel>(403, "403 response", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            throw new ApiException<YtdStockdataResponseModel>(404, "404 response", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            throw new ApiException<YtdStockdataResponseModel>(500, "500 response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: YtdStockdataResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "YtdStockdataResponseModel", ""
            ) as YtdStockdataResponseModel;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
