# .FacturaVentaApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facturaVentaCreate**](FacturaVentaApi.md#facturaVentaCreate) | **POST** /factura_venta/ | 
[**facturaVentaDelete**](FacturaVentaApi.md#facturaVentaDelete) | **DELETE** /factura_venta/{id}/ | 
[**facturaVentaList**](FacturaVentaApi.md#facturaVentaList) | **GET** /factura_venta/ | 
[**facturaVentaPartialUpdate**](FacturaVentaApi.md#facturaVentaPartialUpdate) | **PATCH** /factura_venta/{id}/ | 
[**facturaVentaRead**](FacturaVentaApi.md#facturaVentaRead) | **GET** /factura_venta/{id}/ | 
[**facturaVentaUpdate**](FacturaVentaApi.md#facturaVentaUpdate) | **PUT** /factura_venta/{id}/ | 


# **facturaVentaCreate**
> FacturaVentas facturaVentaCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVentaApi(configuration);

let body:.FacturaVentaApiFacturaVentaCreateRequest = {
  // FacturaVentas
  data: {
    clienteF: 1,
    totalV: "totalV_example",
  },
};

apiInstance.facturaVentaCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVentas**|  |


### Return type

**FacturaVentas**

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

# **facturaVentaDelete**
> void facturaVentaDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVentaApi(configuration);

let body:.FacturaVentaApiFacturaVentaDeleteRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
};

apiInstance.facturaVentaDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


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

# **facturaVentaList**
> Array<FacturaVentas> facturaVentaList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVentaApi(configuration);

let body:any = {};

apiInstance.facturaVentaList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<FacturaVentas>**

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

# **facturaVentaPartialUpdate**
> FacturaVentas facturaVentaPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVentaApi(configuration);

let body:.FacturaVentaApiFacturaVentaPartialUpdateRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
  // FacturaVentas
  data: {
    clienteF: 1,
    totalV: "totalV_example",
  },
};

apiInstance.facturaVentaPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVentas**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


### Return type

**FacturaVentas**

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

# **facturaVentaRead**
> FacturaVentas facturaVentaRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVentaApi(configuration);

let body:.FacturaVentaApiFacturaVentaReadRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
};

apiInstance.facturaVentaRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


### Return type

**FacturaVentas**

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

# **facturaVentaUpdate**
> FacturaVentas facturaVentaUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FacturaVentaApi(configuration);

let body:.FacturaVentaApiFacturaVentaUpdateRequest = {
  // number | A unique integer value identifying this factura_ venta.
  id: 1,
  // FacturaVentas
  data: {
    clienteF: 1,
    totalV: "totalV_example",
  },
};

apiInstance.facturaVentaUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **FacturaVentas**|  |
 **id** | [**number**] | A unique integer value identifying this factura_ venta. | defaults to undefined


### Return type

**FacturaVentas**

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


