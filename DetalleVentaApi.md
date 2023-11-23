# .DetalleVentaApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detalleVentaCreate**](DetalleVentaApi.md#detalleVentaCreate) | **POST** /detalle_venta/ | 
[**detalleVentaDelete**](DetalleVentaApi.md#detalleVentaDelete) | **DELETE** /detalle_venta/{id}/ | 
[**detalleVentaList**](DetalleVentaApi.md#detalleVentaList) | **GET** /detalle_venta/ | 
[**detalleVentaPartialUpdate**](DetalleVentaApi.md#detalleVentaPartialUpdate) | **PATCH** /detalle_venta/{id}/ | 
[**detalleVentaRead**](DetalleVentaApi.md#detalleVentaRead) | **GET** /detalle_venta/{id}/ | 
[**detalleVentaUpdate**](DetalleVentaApi.md#detalleVentaUpdate) | **PUT** /detalle_venta/{id}/ | 


# **detalleVentaCreate**
> DetalleVentas detalleVentaCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleVentaApi(configuration);

let body:.DetalleVentaApiDetalleVentaCreateRequest = {
  // DetalleVentas
  data: {
    facturaVenta: 1,
    productoVenta: 1,
    cantidad: 0,
    precioProducto: "precioProducto_example",
  },
};

apiInstance.detalleVentaCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleVentas**|  |


### Return type

**DetalleVentas**

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

# **detalleVentaDelete**
> void detalleVentaDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleVentaApi(configuration);

let body:.DetalleVentaApiDetalleVentaDeleteRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
};

apiInstance.detalleVentaDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


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

# **detalleVentaList**
> Array<DetalleVentas> detalleVentaList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleVentaApi(configuration);

let body:any = {};

apiInstance.detalleVentaList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DetalleVentas>**

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

# **detalleVentaPartialUpdate**
> DetalleVentas detalleVentaPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleVentaApi(configuration);

let body:.DetalleVentaApiDetalleVentaPartialUpdateRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
  // DetalleVentas
  data: {
    facturaVenta: 1,
    productoVenta: 1,
    cantidad: 0,
    precioProducto: "precioProducto_example",
  },
};

apiInstance.detalleVentaPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleVentas**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


### Return type

**DetalleVentas**

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

# **detalleVentaRead**
> DetalleVentas detalleVentaRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleVentaApi(configuration);

let body:.DetalleVentaApiDetalleVentaReadRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
};

apiInstance.detalleVentaRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


### Return type

**DetalleVentas**

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

# **detalleVentaUpdate**
> DetalleVentas detalleVentaUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleVentaApi(configuration);

let body:.DetalleVentaApiDetalleVentaUpdateRequest = {
  // number | A unique integer value identifying this detalle_ venta.
  id: 1,
  // DetalleVentas
  data: {
    facturaVenta: 1,
    productoVenta: 1,
    cantidad: 0,
    precioProducto: "precioProducto_example",
  },
};

apiInstance.detalleVentaUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleVentas**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ venta. | defaults to undefined


### Return type

**DetalleVentas**

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


