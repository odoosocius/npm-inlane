# InLaneApi.EmptyOutApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationEmptyOutStartPost**](EmptyOutApi.md#apiV1OperationEmptyOutStartPost) | **POST** /api/v1/operation/EmptyOut/start | Start a new empty out operation to empty some/all stocks
[**apiV1OperationEmptyOutStatusGet**](EmptyOutApi.md#apiV1OperationEmptyOutStatusGet) | **GET** /api/v1/operation/EmptyOut/status | Retrieve the status of the empty out operation

<a name="apiV1OperationEmptyOutStartPost"></a>
# **apiV1OperationEmptyOutStartPost**
> StartOperationResponse apiV1OperationEmptyOutStartPost(body, opts)

Start a new empty out operation to empty some/all stocks

Request to start a new empty out operation, to empty completely the stocks whose indexes have been passed as parameter.  Obviously, it is possible only with the stocks having type drum or hopper.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.EmptyOutApi();
let body = new InLaneApi.StartEmptyOutReqData(); // StartEmptyOutReqData | Object containing the stock index array to be emptied
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationEmptyOutStartPost(body, opts, (error, data, response) => {
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
 **body** | [**StartEmptyOutReqData**](StartEmptyOutReqData.md)| Object containing the stock index array to be emptied | 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationEmptyOutStatusGet"></a>
# **apiV1OperationEmptyOutStatusGet**
> EmptyOutOperationStatus apiV1OperationEmptyOutStatusGet()

Retrieve the status of the empty out operation

Request to retrieve the status of the empty out operation, once the empty out is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.EmptyOutApi();
apiInstance.apiV1OperationEmptyOutStatusGet((error, data, response) => {
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

[**EmptyOutOperationStatus**](EmptyOutOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

