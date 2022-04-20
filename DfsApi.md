# .DfsApi

All URIs are relative to *https://ryfjnva5k5.execute-api.eu-central-1.amazonaws.com/prod*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buyAsset**](DfsApi.md#buyAsset) | **POST** /v1/assets/buy | 
[**getAvaliableAssets**](DfsApi.md#getAvaliableAssets) | **GET** /v1/user/assets | 
[**getAvaliableBalance**](DfsApi.md#getAvaliableBalance) | **GET** /v1/user/balance | 
[**getBalanceHistory**](DfsApi.md#getBalanceHistory) | **GET** /v1/user/balance/history | 
[**getStockdataInfo**](DfsApi.md#getStockdataInfo) | **GET** /v1/stockdata/{symbol} | 
[**getStockdataLatest**](DfsApi.md#getStockdataLatest) | **GET** /v1/stockdata/{symbol}/latest | 
[**listSymbols**](DfsApi.md#listSymbols) | **GET** /v1/stockdata/list | 
[**mtdStockdata**](DfsApi.md#mtdStockdata) | **GET** /v1/stockdata/{symbol}/mtd | 
[**oneYearStockdata**](DfsApi.md#oneYearStockdata) | **GET** /v1/stockdata/{symbol}/1year | 
[**rootOptions**](DfsApi.md#rootOptions) | **OPTIONS** / | 
[**sellAsset**](DfsApi.md#sellAsset) | **POST** /v1/assets/sell | 
[**twentyfourHourStockdata**](DfsApi.md#twentyfourHourStockdata) | **GET** /v1/stockdata/{symbol}/24h | 
[**twoYearsStockdata**](DfsApi.md#twoYearsStockdata) | **GET** /v1/stockdata/{symbol}/2years | 
[**userGet**](DfsApi.md#userGet) | **GET** /v1/user | 
[**v1AssetsBuyOptions**](DfsApi.md#v1AssetsBuyOptions) | **OPTIONS** /v1/assets/buy | 
[**v1AssetsOptions**](DfsApi.md#v1AssetsOptions) | **OPTIONS** /v1/assets | 
[**v1AssetsSellOptions**](DfsApi.md#v1AssetsSellOptions) | **OPTIONS** /v1/assets/sell | 
[**v1Options**](DfsApi.md#v1Options) | **OPTIONS** /v1 | 
[**v1StockdataListOptions**](DfsApi.md#v1StockdataListOptions) | **OPTIONS** /v1/stockdata/list | 
[**v1StockdataOptions**](DfsApi.md#v1StockdataOptions) | **OPTIONS** /v1/stockdata | 
[**v1StockdataSymbol1yearOptions**](DfsApi.md#v1StockdataSymbol1yearOptions) | **OPTIONS** /v1/stockdata/{symbol}/1year | 
[**v1StockdataSymbol24hOptions**](DfsApi.md#v1StockdataSymbol24hOptions) | **OPTIONS** /v1/stockdata/{symbol}/24h | 
[**v1StockdataSymbol2yearsOptions**](DfsApi.md#v1StockdataSymbol2yearsOptions) | **OPTIONS** /v1/stockdata/{symbol}/2years | 
[**v1StockdataSymbolLatestOptions**](DfsApi.md#v1StockdataSymbolLatestOptions) | **OPTIONS** /v1/stockdata/{symbol}/latest | 
[**v1StockdataSymbolMtdOptions**](DfsApi.md#v1StockdataSymbolMtdOptions) | **OPTIONS** /v1/stockdata/{symbol}/mtd | 
[**v1StockdataSymbolOptions**](DfsApi.md#v1StockdataSymbolOptions) | **OPTIONS** /v1/stockdata/{symbol} | 
[**v1StockdataSymbolYtdOptions**](DfsApi.md#v1StockdataSymbolYtdOptions) | **OPTIONS** /v1/stockdata/{symbol}/ytd | 
[**v1UserAssetsOptions**](DfsApi.md#v1UserAssetsOptions) | **OPTIONS** /v1/user/assets | 
[**v1UserBalanceHistoryOptions**](DfsApi.md#v1UserBalanceHistoryOptions) | **OPTIONS** /v1/user/balance/history | 
[**v1UserBalanceOptions**](DfsApi.md#v1UserBalanceOptions) | **OPTIONS** /v1/user/balance | 
[**v1UserOptions**](DfsApi.md#v1UserOptions) | **OPTIONS** /v1/user | 
[**ytdStockdata**](DfsApi.md#ytdStockdata) | **GET** /v1/stockdata/{symbol}/ytd | 


# **buyAsset**
> BuyAssetResponseModel buyAsset(buyAssetRequestModel)


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiBuyAssetRequest = {
  // string
  apiKey: "apiKey_example",
  // BuyAssetRequestModel
  buyAssetRequestModel: {
    symbol: "symbol_example",
    amountToSpend: 3.14,
    tokenToBuy: 3.14,
  },
};

apiInstance.buyAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyAssetRequestModel** | **BuyAssetRequestModel**|  |
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**BuyAssetResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAvaliableAssets**
> GetAvaliableAssetsResponseModel getAvaliableAssets()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiGetAvaliableAssetsRequest = {
  // string
  apiKey: "apiKey_example",
};

apiInstance.getAvaliableAssets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**GetAvaliableAssetsResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAvaliableBalance**
> GetAvaliableBalanceResponseModel getAvaliableBalance()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiGetAvaliableBalanceRequest = {
  // string
  apiKey: "apiKey_example",
};

apiInstance.getAvaliableBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**GetAvaliableBalanceResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBalanceHistory**
> GetBalanceHistoryResponseModel getBalanceHistory()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiGetBalanceHistoryRequest = {
  // string
  apiKey: "apiKey_example",
};

apiInstance.getBalanceHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**GetBalanceHistoryResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStockdataInfo**
> GetStockdataInfoResponseModel getStockdataInfo()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiGetStockdataInfoRequest = {
  // string
  symbol: "symbol_example",
  // string
  apiKey: "apiKey_example",
};

apiInstance.getStockdataInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**GetStockdataInfoResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStockdataLatest**
> GetStockdataLatestResponseModel getStockdataLatest()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiGetStockdataLatestRequest = {
  // string
  symbol: "symbol_example",
  // string
  apiKey: "apiKey_example",
};

apiInstance.getStockdataLatest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**GetStockdataLatestResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSymbols**
> ListSymbols listSymbols()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiListSymbolsRequest = {
  // string
  apiKey: "apiKey_example",
};

apiInstance.listSymbols(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**ListSymbols**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mtdStockdata**
> MtdStockdataResponseModel mtdStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiMtdStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.mtdStockdata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**MtdStockdataResponseModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oneYearStockdata**
> Model1yearStockdataResponseModel oneYearStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiOneYearStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.oneYearStockdata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**Model1yearStockdataResponseModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rootOptions**
> void rootOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.rootOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sellAsset**
> SellAssetResponseModel sellAsset(sellAssetRequestModel)


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiSellAssetRequest = {
  // string
  apiKey: "apiKey_example",
  // SellAssetRequestModel
  sellAssetRequestModel: {
    symbol: "symbol_example",
    ammountOfTokensToSell: 3.14,
  },
};

apiInstance.sellAsset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellAssetRequestModel** | **SellAssetRequestModel**|  |
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**SellAssetResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **twentyfourHourStockdata**
> Model24hStockdataResponseModel twentyfourHourStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiTwentyfourHourStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.twentyfourHourStockdata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**Model24hStockdataResponseModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **twoYearsStockdata**
> Model2yearsStockdataResponseModel twoYearsStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiTwoYearsStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.twoYearsStockdata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**Model2yearsStockdataResponseModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userGet**
> GetUserResponseModel userGet()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiUserGetRequest = {
  // string
  apiKey: "apiKey_example",
};

apiInstance.userGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**GetUserResponseModel**

### Authorization

[proddfsswisscognitoAuthorizer029DC9BB](README.md#proddfsswisscognitoAuthorizer029DC9BB)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AssetsBuyOptions**
> void v1AssetsBuyOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1AssetsBuyOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AssetsOptions**
> void v1AssetsOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1AssetsOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1AssetsSellOptions**
> void v1AssetsSellOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1AssetsSellOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1Options**
> void v1Options()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1Options(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataListOptions**
> void v1StockdataListOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1StockdataListOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataOptions**
> void v1StockdataOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1StockdataOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbol1yearOptions**
> void v1StockdataSymbol1yearOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbol1yearOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbol1yearOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbol24hOptions**
> void v1StockdataSymbol24hOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbol24hOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbol24hOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbol2yearsOptions**
> void v1StockdataSymbol2yearsOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbol2yearsOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbol2yearsOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbolLatestOptions**
> void v1StockdataSymbolLatestOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbolLatestOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbolLatestOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbolMtdOptions**
> void v1StockdataSymbolMtdOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbolMtdOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbolMtdOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbolOptions**
> void v1StockdataSymbolOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbolOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbolOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1StockdataSymbolYtdOptions**
> void v1StockdataSymbolYtdOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiV1StockdataSymbolYtdOptionsRequest = {
  // string
  symbol: "symbol_example",
};

apiInstance.v1StockdataSymbolYtdOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UserAssetsOptions**
> void v1UserAssetsOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1UserAssetsOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UserBalanceHistoryOptions**
> void v1UserBalanceHistoryOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1UserBalanceHistoryOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UserBalanceOptions**
> void v1UserBalanceOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1UserBalanceOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1UserOptions**
> void v1UserOptions()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:any = {};

apiInstance.v1UserOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ytdStockdata**
> YtdStockdataResponseModel ytdStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApiYtdStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.ytdStockdata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined
 **symbol** | [**string**] |  | defaults to undefined


### Return type

**YtdStockdataResponseModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  |
**400** | 400 response |  * Access-Control-Allow-Origin -  <br>  |
**401** | 401 response |  * Access-Control-Allow-Origin -  <br>  |
**403** | 403 response |  * Access-Control-Allow-Origin -  <br>  |
**404** | 404 response |  * Access-Control-Allow-Origin -  <br>  |
**500** | 500 response |  * Access-Control-Allow-Origin -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


