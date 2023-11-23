# .FacturaCompraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facturaCompraCreate**](FacturaCompraApi.md#facturaCompraCreate) | **POST** /factura_compra/ | 
[**facturaCompraDelete**](FacturaCompraApi.md#facturaCompraDelete) | **DELETE** /factura_compra/{id}/ | 
[**facturaCompraList**](FacturaCompraApi.md#facturaCompraList) | **GET** /factura_compra/ | 
[**facturaCompraPartialUpdate**](FacturaCompraApi.md#facturaCompraPartialUpdate) | **PATCH** /factura_compra/{id}/ | 
[**facturaCompraRead**](FacturaCompraApi.md#facturaCompraRead) | **GET** /factura_compra/{id}/ | 
[**facturaCompraUpdate**](FacturaCompraApi.md#facturaCompraUpdate) | **PUT** /factura_compra/{id}/ | 


# **facturaCompraCreate**
> FacturaCompras facturaCompraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaCompraApi(configuration);

let body:.FacturaCompraApiFacturaCompraCreateRequest = {
  // FacturaCompras
  data: {
    proveedorF: 1,
    totalC: "totalC_example",
  },
};

apiInstance.facturaCompraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaCompras**|  |


### Return type

**FacturaCompras**

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

# **facturaCompraDelete**
> void facturaCompraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaCompraApi(configuration);

let body:.FacturaCompraApiFacturaCompraDeleteRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
};

apiInstance.facturaCompraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


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

# **facturaCompraList**
> Array<FacturaCompras> facturaCompraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaCompraApi(configuration);

let body:any = {};

apiInstance.facturaCompraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<FacturaCompras>**

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

# **facturaCompraPartialUpdate**
> FacturaCompras facturaCompraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaCompraApi(configuration);

let body:.FacturaCompraApiFacturaCompraPartialUpdateRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
  // FacturaCompras
  data: {
    proveedorF: 1,
    totalC: "totalC_example",
  },
};

apiInstance.facturaCompraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaCompras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


### Return type

**FacturaCompras**

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

# **facturaCompraRead**
> FacturaCompras facturaCompraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaCompraApi(configuration);

let body:.FacturaCompraApiFacturaCompraReadRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
};

apiInstance.facturaCompraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


### Return type

**FacturaCompras**

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

# **facturaCompraUpdate**
> FacturaCompras facturaCompraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaCompraApi(configuration);

let body:.FacturaCompraApiFacturaCompraUpdateRequest = {
  // number | A unique integer value identifying this factura_ compra.
  id: 1,
  // FacturaCompras
  data: {
    proveedorF: 1,
    totalC: "totalC_example",
  },
};

apiInstance.facturaCompraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaCompras**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ compra. | defaults to undefined


### Return type

**FacturaCompras**

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


