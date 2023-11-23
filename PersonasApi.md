# .PersonasApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personasCreate**](PersonasApi.md#personasCreate) | **POST** /personas/ | 
[**personasDelete**](PersonasApi.md#personasDelete) | **DELETE** /personas/{id}/ | 
[**personasList**](PersonasApi.md#personasList) | **GET** /personas/ | 
[**personasPartialUpdate**](PersonasApi.md#personasPartialUpdate) | **PATCH** /personas/{id}/ | 
[**personasRead**](PersonasApi.md#personasRead) | **GET** /personas/{id}/ | 
[**personasUpdate**](PersonasApi.md#personasUpdate) | **PUT** /personas/{id}/ | 


# **personasCreate**
> Personas personasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonasApi(configuration);

let body:.PersonasApiPersonasCreateRequest = {
  // Personas
  data: {
    nombre: "nombre_example",
    apellido: "apellido_example",
    telefono: "telefono_example",
    correo: "correo_example",
    tipoPersona: "cliente",
  },
};

apiInstance.personasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Personas**|  |


### Return type

**Personas**

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

# **personasDelete**
> void personasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonasApi(configuration);

let body:.PersonasApiPersonasDeleteRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
};

apiInstance.personasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


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

# **personasList**
> Array<Personas> personasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonasApi(configuration);

let body:.PersonasApiPersonasListRequest = {
  // string | nombre (optional)
  nombre: "nombre_example",
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
};

apiInstance.personasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nombre** | [**string**] | nombre | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined


### Return type

**Array<Personas>**

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

# **personasPartialUpdate**
> Personas personasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonasApi(configuration);

let body:.PersonasApiPersonasPartialUpdateRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
  // Personas
  data: {
    nombre: "nombre_example",
    apellido: "apellido_example",
    telefono: "telefono_example",
    correo: "correo_example",
    tipoPersona: "cliente",
  },
};

apiInstance.personasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Personas**|  |
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


### Return type

**Personas**

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

# **personasRead**
> Personas personasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonasApi(configuration);

let body:.PersonasApiPersonasReadRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
};

apiInstance.personasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


### Return type

**Personas**

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

# **personasUpdate**
> Personas personasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PersonasApi(configuration);

let body:.PersonasApiPersonasUpdateRequest = {
  // number | A unique integer value identifying this persona.
  id: 1,
  // Personas
  data: {
    nombre: "nombre_example",
    apellido: "apellido_example",
    telefono: "telefono_example",
    correo: "correo_example",
    tipoPersona: "cliente",
  },
};

apiInstance.personasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Personas**|  |
 **id** | [**number**] | A unique integer value identifying this persona. | defaults to undefined


### Return type

**Personas**

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


