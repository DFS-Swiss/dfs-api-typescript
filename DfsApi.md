# .DfsApi

All URIs are relative to *https://ryfjnva5k5.execute-api.eu-central-1.amazonaws.com/prod*

Method | HTTP request | Description
------------- | ------------- | -------------
[**1yearStockdata**](DfsApi.md#1yearStockdata) | **GET** /v1/stockdata/{symbol}/1year | 
[**24hStockdata**](DfsApi.md#24hStockdata) | **GET** /v1/stockdata/{symbol}/24h | 
[**2yearsStockdata**](DfsApi.md#2yearsStockdata) | **GET** /v1/stockdata/{symbol}/2years | 
[**mtdStockdata**](DfsApi.md#mtdStockdata) | **GET** /v1/stockdata/{symbol}/mtd | 
[**rootOptions**](DfsApi.md#rootOptions) | **OPTIONS** / | 
[**v1Options**](DfsApi.md#v1Options) | **OPTIONS** /v1 | 
[**v1StockdataOptions**](DfsApi.md#v1StockdataOptions) | **OPTIONS** /v1/stockdata | 
[**v1StockdataSymbol1yearOptions**](DfsApi.md#v1StockdataSymbol1yearOptions) | **OPTIONS** /v1/stockdata/{symbol}/1year | 
[**v1StockdataSymbol24hOptions**](DfsApi.md#v1StockdataSymbol24hOptions) | **OPTIONS** /v1/stockdata/{symbol}/24h | 
[**v1StockdataSymbol2yearsOptions**](DfsApi.md#v1StockdataSymbol2yearsOptions) | **OPTIONS** /v1/stockdata/{symbol}/2years | 
[**v1StockdataSymbolMtdOptions**](DfsApi.md#v1StockdataSymbolMtdOptions) | **OPTIONS** /v1/stockdata/{symbol}/mtd | 
[**v1StockdataSymbolOptions**](DfsApi.md#v1StockdataSymbolOptions) | **OPTIONS** /v1/stockdata/{symbol} | 
[**v1StockdataSymbolYtdOptions**](DfsApi.md#v1StockdataSymbolYtdOptions) | **OPTIONS** /v1/stockdata/{symbol}/ytd | 
[**ytdStockdata**](DfsApi.md#ytdStockdata) | **GET** /v1/stockdata/{symbol}/ytd | 


# **1yearStockdata**
> Model1yearStockdataResponseModel 1yearStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApi1yearStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.1yearStockdata(body).then((data:any) => {
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

# **24hStockdata**
> Model24hStockdataResponseModel 24hStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApi24hStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.24hStockdata(body).then((data:any) => {
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

# **2yearsStockdata**
> Model2yearsStockdataResponseModel 2yearsStockdata()


### Example


```typescript
import {  } from 'DFS_Sdk';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DfsApi(configuration);

let body:.DfsApi2yearsStockdataRequest = {
  // string
  apiKey: "apiKey_example",
  // string
  symbol: "symbol_example",
};

apiInstance.2yearsStockdata(body).then((data:any) => {
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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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
**200** | 200 response |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Credentials -  <br>  * Access-Control-Allow-Headers -  <br>  |

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

