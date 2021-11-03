# InLaneApi.BagCollectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationBagCollectionStartPost**](BagCollectionApi.md#apiV1OperationBagCollectionStartPost) | **POST** /api/v1/operation/BagCollection/start | Start a new bag collection operation to change the bags inside the safe
[**apiV1OperationBagCollectionStatusGet**](BagCollectionApi.md#apiV1OperationBagCollectionStatusGet) | **GET** /api/v1/operation/BagCollection/status | Retrieve the status of the bag collection operation

<a name="apiV1OperationBagCollectionStartPost"></a>
# **apiV1OperationBagCollectionStartPost**
> StartOperationResponse apiV1OperationBagCollectionStartPost(body, opts)

Start a new bag collection operation to change the bags inside the safe

Request to start a new bag collection operation. Functionality used to unlock the safe door, change the bags and reset their content.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.BagCollectionApi();
let body = new InLaneApi.StartBagCollectionReqData(); // StartBagCollectionReqData | Object containing the information about the types of bag/bags it would like to collect
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationBagCollectionStartPost(body, opts, (error, data, response) => {
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
 **body** | [**StartBagCollectionReqData**](StartBagCollectionReqData.md)| Object containing the information about the types of bag/bags it would like to collect | 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationBagCollectionStatusGet"></a>
# **apiV1OperationBagCollectionStatusGet**
> BagCollectionOperationStatus apiV1OperationBagCollectionStatusGet()

Retrieve the status of the bag collection operation

Request to retrieve the status of the bag collection operation, once the bag collection is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.BagCollectionApi();
apiInstance.apiV1OperationBagCollectionStatusGet((error, data, response) => {
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

[**BagCollectionOperationStatus**](BagCollectionOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

