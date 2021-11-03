# InLaneApi.RefillApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationRefillEndPost**](RefillApi.md#apiV1OperationRefillEndPost) | **POST** /api/v1/operation/Refill/end | Stop the refill operation
[**apiV1OperationRefillStartPost**](RefillApi.md#apiV1OperationRefillStartPost) | **POST** /api/v1/operation/Refill/start | Start a new refill operation
[**apiV1OperationRefillStatusGet**](RefillApi.md#apiV1OperationRefillStatusGet) | **GET** /api/v1/operation/Refill/status | Retrieve the status of the refill operation

<a name="apiV1OperationRefillEndPost"></a>
# **apiV1OperationRefillEndPost**
> apiV1OperationRefillEndPost()

Stop the refill operation

Request to stop the refill operation in progress

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.RefillApi();
apiInstance.apiV1OperationRefillEndPost((error, data, response) => {
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

<a name="apiV1OperationRefillStartPost"></a>
# **apiV1OperationRefillStartPost**
> StartOperationResponse apiV1OperationRefillStartPost(opts)

Start a new refill operation

Request to start a new refill operation  The refill will be automatically stopped if the web API does not receive any refill status request for more than 1 minute.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.RefillApi();
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationRefillStartPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1OperationRefillStatusGet"></a>
# **apiV1OperationRefillStatusGet**
> RefillOperationStatus apiV1OperationRefillStatusGet()

Retrieve the status of the refill operation

Request to retrieve the status of the refill operation, once the refill is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.RefillApi();
apiInstance.apiV1OperationRefillStatusGet((error, data, response) => {
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

[**RefillOperationStatus**](RefillOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

