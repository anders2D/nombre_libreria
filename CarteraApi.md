# .CarteraApi

All URIs are relative to *https://diplomadobd-06369030a7e4.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**carteraCreate**](CarteraApi.md#carteraCreate) | **POST** /cartera/ | 
[**carteraDelete**](CarteraApi.md#carteraDelete) | **DELETE** /cartera/{id}/ | 
[**carteraList**](CarteraApi.md#carteraList) | **GET** /cartera/ | 
[**carteraPartialUpdate**](CarteraApi.md#carteraPartialUpdate) | **PATCH** /cartera/{id}/ | 
[**carteraRead**](CarteraApi.md#carteraRead) | **GET** /cartera/{id}/ | 
[**carteraUpdate**](CarteraApi.md#carteraUpdate) | **PUT** /cartera/{id}/ | 


# **carteraCreate**
> Carteras carteraCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CarteraApi(configuration);

let body:.CarteraApiCarteraCreateRequest = {
  // Carteras
  data: {
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
    pago: 1,
  },
};

apiInstance.carteraCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Carteras**|  |


### Return type

**Carteras**

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

# **carteraDelete**
> void carteraDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CarteraApi(configuration);

let body:.CarteraApiCarteraDeleteRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
};

apiInstance.carteraDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


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

# **carteraList**
> Array<Carteras> carteraList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CarteraApi(configuration);

let body:any = {};

apiInstance.carteraList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Carteras>**

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

# **carteraPartialUpdate**
> Carteras carteraPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CarteraApi(configuration);

let body:.CarteraApiCarteraPartialUpdateRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
  // Carteras
  data: {
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
    pago: 1,
  },
};

apiInstance.carteraPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Carteras**|  |
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


### Return type

**Carteras**

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

# **carteraRead**
> Carteras carteraRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CarteraApi(configuration);

let body:.CarteraApiCarteraReadRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
};

apiInstance.carteraRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


### Return type

**Carteras**

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

# **carteraUpdate**
> Carteras carteraUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CarteraApi(configuration);

let body:.CarteraApiCarteraUpdateRequest = {
  // number | A unique integer value identifying this cartera.
  id: 1,
  // Carteras
  data: {
    fechaVencimiento: new Date('1970-01-01').toISOString().split('T')[0];,
    pago: 1,
  },
};

apiInstance.carteraUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Carteras**|  |
 **id** | [**number**] | A unique integer value identifying this cartera. | defaults to undefined


### Return type

**Carteras**

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


