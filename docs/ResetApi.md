# InLaneApi.ResetApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationResetStartPost**](ResetApi.md#apiV1OperationResetStartPost) | **POST** /api/v1/operation/Reset/start | Start a new device reset operation
[**apiV1OperationResetStatusGet**](ResetApi.md#apiV1OperationResetStatusGet) | **GET** /api/v1/operation/Reset/status | Retrieve the status of the reset operation

<a name="apiV1OperationResetStartPost"></a>
# **apiV1OperationResetStartPost**
> apiV1OperationResetStartPost()

Start a new device reset operation

Request to start a new device reset operation

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ResetApi();
apiInstance.apiV1OperationResetStartPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1OperationResetStatusGet"></a>
# **apiV1OperationResetStatusGet**
> OperationStatus apiV1OperationResetStatusGet()

Retrieve the status of the reset operation

Request to retrieve the status of the reset operation, once the reset is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ResetApi();
apiInstance.apiV1OperationResetStatusGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

