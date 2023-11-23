# .DetalleCompraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detalleCompraCreate**](DetalleCompraApi.md#detalleCompraCreate) | **POST** /detalle_compra/ | 
[**detalleCompraDelete**](DetalleCompraApi.md#detalleCompraDelete) | **DELETE** /detalle_compra/{id}/ | 
[**detalleCompraList**](DetalleCompraApi.md#detalleCompraList) | **GET** /detalle_compra/ | 
[**detalleCompraPartialUpdate**](DetalleCompraApi.md#detalleCompraPartialUpdate) | **PATCH** /detalle_compra/{id}/ | 
[**detalleCompraRead**](DetalleCompraApi.md#detalleCompraRead) | **GET** /detalle_compra/{id}/ | 
[**detalleCompraUpdate**](DetalleCompraApi.md#detalleCompraUpdate) | **PUT** /detalle_compra/{id}/ | 


# **detalleCompraCreate**
> DetalleCompras detalleCompraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleCompraApi(configuration);

let body:.DetalleCompraApiDetalleCompraCreateRequest = {
  // DetalleCompras
  data: {
    facturaCompra: 1,
    fcompraData: {
      proveedorF: 1,
      totalC: "totalC_example",
    },
    productoCompra: 1,
    cantidad: 0,
    precioUnitario: "precioUnitario_example",
  },
};

apiInstance.detalleCompraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleCompras**|  |


### Return type

**DetalleCompras**

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

# **detalleCompraDelete**
> void detalleCompraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleCompraApi(configuration);

let body:.DetalleCompraApiDetalleCompraDeleteRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
};

apiInstance.detalleCompraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


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

# **detalleCompraList**
> Array<DetalleCompras> detalleCompraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleCompraApi(configuration);

let body:any = {};

apiInstance.detalleCompraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DetalleCompras>**

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

# **detalleCompraPartialUpdate**
> DetalleCompras detalleCompraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleCompraApi(configuration);

let body:.DetalleCompraApiDetalleCompraPartialUpdateRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
  // DetalleCompras
  data: {
    facturaCompra: 1,
    fcompraData: {
      proveedorF: 1,
      totalC: "totalC_example",
    },
    productoCompra: 1,
    cantidad: 0,
    precioUnitario: "precioUnitario_example",
  },
};

apiInstance.detalleCompraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleCompras**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


### Return type

**DetalleCompras**

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

# **detalleCompraRead**
> DetalleCompras detalleCompraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleCompraApi(configuration);

let body:.DetalleCompraApiDetalleCompraReadRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
};

apiInstance.detalleCompraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


### Return type

**DetalleCompras**

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

# **detalleCompraUpdate**
> DetalleCompras detalleCompraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetalleCompraApi(configuration);

let body:.DetalleCompraApiDetalleCompraUpdateRequest = {
  // number | A unique integer value identifying this detalle_ compra.
  id: 1,
  // DetalleCompras
  data: {
    facturaCompra: 1,
    fcompraData: {
      proveedorF: 1,
      totalC: "totalC_example",
    },
    productoCompra: 1,
    cantidad: 0,
    precioUnitario: "precioUnitario_example",
  },
};

apiInstance.detalleCompraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetalleCompras**|  |
 **id** | [**number**] | A unique integer value identifying this detalle_ compra. | defaults to undefined


### Return type

**DetalleCompras**

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


