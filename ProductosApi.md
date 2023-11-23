# .ProductosApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productosCreate**](ProductosApi.md#productosCreate) | **POST** /productos/ | 
[**productosDelete**](ProductosApi.md#productosDelete) | **DELETE** /productos/{id}/ | 
[**productosList**](ProductosApi.md#productosList) | **GET** /productos/ | 
[**productosPartialUpdate**](ProductosApi.md#productosPartialUpdate) | **PATCH** /productos/{id}/ | 
[**productosRead**](ProductosApi.md#productosRead) | **GET** /productos/{id}/ | 
[**productosUpdate**](ProductosApi.md#productosUpdate) | **PUT** /productos/{id}/ | 


# **productosCreate**
> Productos productosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductosApi(configuration);

let body:.ProductosApiProductosCreateRequest = {
  // Productos
  data: {
    codigo: -2147483648,
    nombre: "nombre_example",
    descripcion: "descripcion_example",
    categoria: 1,
    precio: "precio_example",
    estado: "activo",
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.productosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Productos**|  |


### Return type

**Productos**

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

# **productosDelete**
> void productosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductosApi(configuration);

let body:.ProductosApiProductosDeleteRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
};

apiInstance.productosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


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

# **productosList**
> Array<Productos> productosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductosApi(configuration);

let body:.ProductosApiProductosListRequest = {
  // string | categoria (optional)
  categoria: "categoria_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.productosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoria** | [**string**] | categoria | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Productos>**

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

# **productosPartialUpdate**
> Productos productosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductosApi(configuration);

let body:.ProductosApiProductosPartialUpdateRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
  // Productos
  data: {
    codigo: -2147483648,
    nombre: "nombre_example",
    descripcion: "descripcion_example",
    categoria: 1,
    precio: "precio_example",
    estado: "activo",
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.productosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Productos**|  |
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


### Return type

**Productos**

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

# **productosRead**
> Productos productosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductosApi(configuration);

let body:.ProductosApiProductosReadRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
};

apiInstance.productosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


### Return type

**Productos**

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

# **productosUpdate**
> Productos productosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductosApi(configuration);

let body:.ProductosApiProductosUpdateRequest = {
  // number | A unique integer value identifying this producto.
  id: 1,
  // Productos
  data: {
    codigo: -2147483648,
    nombre: "nombre_example",
    descripcion: "descripcion_example",
    categoria: 1,
    precio: "precio_example",
    estado: "activo",
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.productosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Productos**|  |
 **id** | [**number**] | A unique integer value identifying this producto. | defaults to undefined


### Return type

**Productos**

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


