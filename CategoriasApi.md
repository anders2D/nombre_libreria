# .CategoriasApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriasCreate**](CategoriasApi.md#categoriasCreate) | **POST** /categorias/ | 
[**categoriasDelete**](CategoriasApi.md#categoriasDelete) | **DELETE** /categorias/{id}/ | 
[**categoriasList**](CategoriasApi.md#categoriasList) | **GET** /categorias/ | 
[**categoriasPartialUpdate**](CategoriasApi.md#categoriasPartialUpdate) | **PATCH** /categorias/{id}/ | 
[**categoriasRead**](CategoriasApi.md#categoriasRead) | **GET** /categorias/{id}/ | 
[**categoriasUpdate**](CategoriasApi.md#categoriasUpdate) | **PUT** /categorias/{id}/ | 


# **categoriasCreate**
> Categorias categoriasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriasApi(configuration);

let body:.CategoriasApiCategoriasCreateRequest = {
  // Categorias
  data: {
    descripcion: "descripcion_example",
  },
};

apiInstance.categoriasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Categorias**|  |


### Return type

**Categorias**

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

# **categoriasDelete**
> void categoriasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriasApi(configuration);

let body:.CategoriasApiCategoriasDeleteRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
};

apiInstance.categoriasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


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

# **categoriasList**
> Array<Categorias> categoriasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriasApi(configuration);

let body:any = {};

apiInstance.categoriasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Categorias>**

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

# **categoriasPartialUpdate**
> Categorias categoriasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriasApi(configuration);

let body:.CategoriasApiCategoriasPartialUpdateRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
  // Categorias
  data: {
    descripcion: "descripcion_example",
  },
};

apiInstance.categoriasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Categorias**|  |
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**Categorias**

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

# **categoriasRead**
> Categorias categoriasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriasApi(configuration);

let body:.CategoriasApiCategoriasReadRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
};

apiInstance.categoriasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**Categorias**

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

# **categoriasUpdate**
> Categorias categoriasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriasApi(configuration);

let body:.CategoriasApiCategoriasUpdateRequest = {
  // number | A unique integer value identifying this categoria.
  id: 1,
  // Categorias
  data: {
    descripcion: "descripcion_example",
  },
};

apiInstance.categoriasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Categorias**|  |
 **id** | [**number**] | A unique integer value identifying this categoria. | defaults to undefined


### Return type

**Categorias**

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


