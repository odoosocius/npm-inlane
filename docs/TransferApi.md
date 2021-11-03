# InLaneApi.TransferApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationTransferStartPost**](TransferApi.md#apiV1OperationTransferStartPost) | **POST** /api/v1/operation/Transfer/start | Start a new transfer operation
[**apiV1OperationTransferStatusGet**](TransferApi.md#apiV1OperationTransferStatusGet) | **GET** /api/v1/operation/Transfer/status | Retrieve the status of the transfer operation

<a name="apiV1OperationTransferStartPost"></a>
# **apiV1OperationTransferStartPost**
> StartOperationResponse apiV1OperationTransferStartPost(body, opts)

Start a new transfer operation

Request to start a new transfer operation.  This functionality allows to move from some source stocks a specified quantity of banknotes/coins to a cassette or a bag (depending on the InLane model).  From the banknotes stocks it is possible to move the banknotes to the cassette in all InLane model and in the bag in the models with the safe.  From the coins stocks it is possible to move the coins to the bag in the models with the safe.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferApi();
let body = new InLaneApi.StartTransferReqData(); // StartTransferReqData | Object containing the details about the sources, quantities and destination of this transfer operation
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationTransferStartPost(body, opts, (error, data, response) => {
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
 **body** | [**StartTransferReqData**](StartTransferReqData.md)| Object containing the details about the sources, quantities and destination of this transfer operation | 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationTransferStatusGet"></a>
# **apiV1OperationTransferStatusGet**
> TransferOperationStatus apiV1OperationTransferStatusGet()

Retrieve the status of the transfer operation

Request to retrieve the status of the transfer operation, once the transfer is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferApi();
apiInstance.apiV1OperationTransferStatusGet((error, data, response) => {
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

[**TransferOperationStatus**](TransferOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

