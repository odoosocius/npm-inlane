# InLaneApi.CassetteCollectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationCassetteCollectionReleaseCassettePost**](CassetteCollectionApi.md#apiV1OperationCassetteCollectionReleaseCassettePost) | **POST** /api/v1/operation/CassetteCollection/releaseCassette | Command to release the hook of the cassette for 30 seconds
[**apiV1OperationCassetteCollectionStartPost**](CassetteCollectionApi.md#apiV1OperationCassetteCollectionStartPost) | **POST** /api/v1/operation/CassetteCollection/start | Start a new banknotes cassette collection operation
[**apiV1OperationCassetteCollectionStatusGet**](CassetteCollectionApi.md#apiV1OperationCassetteCollectionStatusGet) | **GET** /api/v1/operation/CassetteCollection/status | Retrieve the status of the cassette collection operation

<a name="apiV1OperationCassetteCollectionReleaseCassettePost"></a>
# **apiV1OperationCassetteCollectionReleaseCassettePost**
> apiV1OperationCassetteCollectionReleaseCassettePost()

Command to release the hook of the cassette for 30 seconds

It is required to send this command when the cassetteCollectionStatus is askCassetteHookRelease  to release the hook used to lock the cassette for 30 seconds

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.CassetteCollectionApi();
apiInstance.apiV1OperationCassetteCollectionReleaseCassettePost((error, data, response) => {
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

<a name="apiV1OperationCassetteCollectionStartPost"></a>
# **apiV1OperationCassetteCollectionStartPost**
> StartOperationResponse apiV1OperationCassetteCollectionStartPost(opts)

Start a new banknotes cassette collection operation

Request to start a new banknotes cassette collection operation.  This flow allows to remove and empty the cassette.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.CassetteCollectionApi();
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationCassetteCollectionStartPost(opts, (error, data, response) => {
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

<a name="apiV1OperationCassetteCollectionStatusGet"></a>
# **apiV1OperationCassetteCollectionStatusGet**
> CassetteCollectionOperationStatus apiV1OperationCassetteCollectionStatusGet()

Retrieve the status of the cassette collection operation

Request to retrieve the status of the cassette collection operation, once the transfer is started - minimum time between 2 requests 300ms -  Once the cover has been opened the hook used to lock the cassette will be automatically released for 30 seconds.   If the cassette will not be removed in the 30 seconds, the cassetteCollectionStatus will became askCassetteHookRelease  and it is required to send a ReleaseCassette command to release the hook again for other 30 seconds.  Leaving the hook released for more than 30 seconds can damage the device hardware.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.CassetteCollectionApi();
apiInstance.apiV1OperationCassetteCollectionStatusGet((error, data, response) => {
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

[**CassetteCollectionOperationStatus**](CassetteCollectionOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

