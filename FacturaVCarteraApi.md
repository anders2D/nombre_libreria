# .FacturaVCarteraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facturaVCarteraCreate**](FacturaVCarteraApi.md#facturaVCarteraCreate) | **POST** /factura_v_cartera/ | 
[**facturaVCarteraDelete**](FacturaVCarteraApi.md#facturaVCarteraDelete) | **DELETE** /factura_v_cartera/{id}/ | 
[**facturaVCarteraList**](FacturaVCarteraApi.md#facturaVCarteraList) | **GET** /factura_v_cartera/ | 
[**facturaVCarteraPartialUpdate**](FacturaVCarteraApi.md#facturaVCarteraPartialUpdate) | **PATCH** /factura_v_cartera/{id}/ | 
[**facturaVCarteraRead**](FacturaVCarteraApi.md#facturaVCarteraRead) | **GET** /factura_v_cartera/{id}/ | 
[**facturaVCarteraUpdate**](FacturaVCarteraApi.md#facturaVCarteraUpdate) | **PUT** /factura_v_cartera/{id}/ | 


# **facturaVCarteraCreate**
> FacturaVCarteras facturaVCarteraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVCarteraApi(configuration);

let body:.FacturaVCarteraApiFacturaVCarteraCreateRequest = {
  // FacturaVCarteras
  data: {
    facturaVenta: 1,
    cartera: 1,
  },
};

apiInstance.facturaVCarteraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVCarteras**|  |


### Return type

**FacturaVCarteras**

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

# **facturaVCarteraDelete**
> void facturaVCarteraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVCarteraApi(configuration);

let body:.FacturaVCarteraApiFacturaVCarteraDeleteRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
};

apiInstance.facturaVCarteraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


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

# **facturaVCarteraList**
> Array<FacturaVCarteras> facturaVCarteraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVCarteraApi(configuration);

let body:any = {};

apiInstance.facturaVCarteraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<FacturaVCarteras>**

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

# **facturaVCarteraPartialUpdate**
> FacturaVCarteras facturaVCarteraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVCarteraApi(configuration);

let body:.FacturaVCarteraApiFacturaVCarteraPartialUpdateRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
  // FacturaVCarteras
  data: {
    facturaVenta: 1,
    cartera: 1,
  },
};

apiInstance.facturaVCarteraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVCarteras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


### Return type

**FacturaVCarteras**

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

# **facturaVCarteraRead**
> FacturaVCarteras facturaVCarteraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVCarteraApi(configuration);

let body:.FacturaVCarteraApiFacturaVCarteraReadRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
};

apiInstance.facturaVCarteraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


### Return type

**FacturaVCarteras**

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

# **facturaVCarteraUpdate**
> FacturaVCarteras facturaVCarteraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVCarteraApi(configuration);

let body:.FacturaVCarteraApiFacturaVCarteraUpdateRequest = {
  // number | A unique integer value identifying this factura_v_ cartera.
  id: 1,
  // FacturaVCarteras
  data: {
    facturaVenta: 1,
    cartera: 1,
  },
};

apiInstance.facturaVCarteraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVCarteras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_v_ cartera. | defaults to undefined


### Return type

**FacturaVCarteras**

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


