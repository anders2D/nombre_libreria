# .StockApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stockCreate**](StockApi.md#stockCreate) | **POST** /stock/ | 
[**stockDelete**](StockApi.md#stockDelete) | **DELETE** /stock/{id}/ | 
[**stockList**](StockApi.md#stockList) | **GET** /stock/ | 
[**stockPartialUpdate**](StockApi.md#stockPartialUpdate) | **PATCH** /stock/{id}/ | 
[**stockRead**](StockApi.md#stockRead) | **GET** /stock/{id}/ | 
[**stockUpdate**](StockApi.md#stockUpdate) | **PUT** /stock/{id}/ | 


# **stockCreate**
> Stock stockCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StockApi(configuration);

let body:.StockApiStockCreateRequest = {
  // Stock
  data: {
    productoStock: 1,
    cantidad: 0,
    loteStock: 1,
  },
};

apiInstance.stockCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Stock**|  |


### Return type

**Stock**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stockDelete**
> void stockDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StockApi(configuration);

let body:.StockApiStockDeleteRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
};

apiInstance.stockDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**void**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stockList**
> Array<Stock> stockList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StockApi(configuration);

let body:.StockApiStockListRequest = {
  // string | cantidad (optional)
  cantidad: "cantidad_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.stockList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cantidad** | [**string**] | cantidad | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Stock>**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stockPartialUpdate**
> Stock stockPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StockApi(configuration);

let body:.StockApiStockPartialUpdateRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
  // Stock
  data: {
    productoStock: 1,
    cantidad: 0,
    loteStock: 1,
  },
};

apiInstance.stockPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Stock**|  |
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**Stock**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stockRead**
> Stock stockRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StockApi(configuration);

let body:.StockApiStockReadRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
};

apiInstance.stockRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**Stock**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stockUpdate**
> Stock stockUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StockApi(configuration);

let body:.StockApiStockUpdateRequest = {
  // number | A unique integer value identifying this stock.
  id: 1,
  // Stock
  data: {
    productoStock: 1,
    cantidad: 0,
    loteStock: 1,
  },
};

apiInstance.stockUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Stock**|  |
 **id** | [**number**] | A unique integer value identifying this stock. | defaults to undefined


### Return type

**Stock**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


