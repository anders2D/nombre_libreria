# .PagoApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pagoCreate**](PagoApi.md#pagoCreate) | **POST** /pago/ | 
[**pagoDelete**](PagoApi.md#pagoDelete) | **DELETE** /pago/{id}/ | 
[**pagoList**](PagoApi.md#pagoList) | **GET** /pago/ | 
[**pagoPartialUpdate**](PagoApi.md#pagoPartialUpdate) | **PATCH** /pago/{id}/ | 
[**pagoRead**](PagoApi.md#pagoRead) | **GET** /pago/{id}/ | 
[**pagoUpdate**](PagoApi.md#pagoUpdate) | **PUT** /pago/{id}/ | 


# **pagoCreate**
> Pagos pagoCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PagoApi(configuration);

let body:.PagoApiPagoCreateRequest = {
  // Pagos
  data: {
    medioPago: "Efectivo",
    estadoPago: "PENDIENTE",
    facturaV: 1,
    facturaC: 1,
  },
};

apiInstance.pagoCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |


### Return type

**Pagos**

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

# **pagoDelete**
> void pagoDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PagoApi(configuration);

let body:.PagoApiPagoDeleteRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
};

apiInstance.pagoDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


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

# **pagoList**
> Array<Pagos> pagoList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PagoApi(configuration);

let body:any = {};

apiInstance.pagoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Pagos>**

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

# **pagoPartialUpdate**
> Pagos pagoPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PagoApi(configuration);

let body:.PagoApiPagoPartialUpdateRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
  // Pagos
  data: {
    medioPago: "Efectivo",
    estadoPago: "PENDIENTE",
    facturaV: 1,
    facturaC: 1,
  },
};

apiInstance.pagoPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


### Return type

**Pagos**

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

# **pagoRead**
> Pagos pagoRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PagoApi(configuration);

let body:.PagoApiPagoReadRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
};

apiInstance.pagoRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


### Return type

**Pagos**

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

# **pagoUpdate**
> Pagos pagoUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PagoApi(configuration);

let body:.PagoApiPagoUpdateRequest = {
  // number | A unique integer value identifying this pago.
  id: 1,
  // Pagos
  data: {
    medioPago: "Efectivo",
    estadoPago: "PENDIENTE",
    facturaV: 1,
    facturaC: 1,
  },
};

apiInstance.pagoUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |
 **id** | [**number**] | A unique integer value identifying this pago. | defaults to undefined


### Return type

**Pagos**

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


