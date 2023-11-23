# .LotesApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lotesCreate**](LotesApi.md#lotesCreate) | **POST** /lotes/ | 
[**lotesDelete**](LotesApi.md#lotesDelete) | **DELETE** /lotes/{id}/ | 
[**lotesList**](LotesApi.md#lotesList) | **GET** /lotes/ | 
[**lotesPartialUpdate**](LotesApi.md#lotesPartialUpdate) | **PATCH** /lotes/{id}/ | 
[**lotesRead**](LotesApi.md#lotesRead) | **GET** /lotes/{id}/ | 
[**lotesUpdate**](LotesApi.md#lotesUpdate) | **PUT** /lotes/{id}/ | 


# **lotesCreate**
> Lotes lotesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LotesApi(configuration);

let body:.LotesApiLotesCreateRequest = {
  // Lotes
  data: {
    productoLote: 1,
    cantidad: "cantidad_example",
    numeroLote: 0,
  },
};

apiInstance.lotesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Lotes**|  |


### Return type

**Lotes**

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

# **lotesDelete**
> void lotesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LotesApi(configuration);

let body:.LotesApiLotesDeleteRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
};

apiInstance.lotesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


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

# **lotesList**
> Array<Lotes> lotesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LotesApi(configuration);

let body:.LotesApiLotesListRequest = {
  // string | producto_lote (optional)
  productoLote: "producto_lote_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.lotesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productoLote** | [**string**] | producto_lote | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Lotes>**

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

# **lotesPartialUpdate**
> Lotes lotesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LotesApi(configuration);

let body:.LotesApiLotesPartialUpdateRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
  // Lotes
  data: {
    productoLote: 1,
    cantidad: "cantidad_example",
    numeroLote: 0,
  },
};

apiInstance.lotesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Lotes**|  |
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


### Return type

**Lotes**

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

# **lotesRead**
> Lotes lotesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LotesApi(configuration);

let body:.LotesApiLotesReadRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
};

apiInstance.lotesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


### Return type

**Lotes**

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

# **lotesUpdate**
> Lotes lotesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LotesApi(configuration);

let body:.LotesApiLotesUpdateRequest = {
  // number | A unique integer value identifying this lote.
  id: 1,
  // Lotes
  data: {
    productoLote: 1,
    cantidad: "cantidad_example",
    numeroLote: 0,
  },
};

apiInstance.lotesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Lotes**|  |
 **id** | [**number**] | A unique integer value identifying this lote. | defaults to undefined


### Return type

**Lotes**

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


