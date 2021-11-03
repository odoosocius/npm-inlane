# InLaneApi.TransferAllButKitApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationTransferAllButKitCheckUnderThresholdKitDenominationsGet**](TransferAllButKitApi.md#apiV1OperationTransferAllButKitCheckUnderThresholdKitDenominationsGet) | **GET** /api/v1/operation/TransferAllButKit/checkUnderThresholdKitDenominations | Function to check if there are some denomination under the minimum kit threshold
[**apiV1OperationTransferAllButKitConfigurationGet**](TransferAllButKitApi.md#apiV1OperationTransferAllButKitConfigurationGet) | **GET** /api/v1/operation/TransferAllButKit/configuration | Function to read minimum kit configured
[**apiV1OperationTransferAllButKitConfigurationPost**](TransferAllButKitApi.md#apiV1OperationTransferAllButKitConfigurationPost) | **POST** /api/v1/operation/TransferAllButKit/configuration | Function to set the Minimum Kit
[**apiV1OperationTransferAllButKitStartPost**](TransferAllButKitApi.md#apiV1OperationTransferAllButKitStartPost) | **POST** /api/v1/operation/TransferAllButKit/start | Start a new transfer all but kit operation
[**apiV1OperationTransferAllButKitStatusGet**](TransferAllButKitApi.md#apiV1OperationTransferAllButKitStatusGet) | **GET** /api/v1/operation/TransferAllButKit/status | Retrieve the status of the transfer all but kit operation

<a name="apiV1OperationTransferAllButKitCheckUnderThresholdKitDenominationsGet"></a>
# **apiV1OperationTransferAllButKitCheckUnderThresholdKitDenominationsGet**
> [KitDenomination] apiV1OperationTransferAllButKitCheckUnderThresholdKitDenominationsGet()

Function to check if there are some denomination under the minimum kit threshold

Function to check if there are some denomination under the minimum kit threshold

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferAllButKitApi();
apiInstance.apiV1OperationTransferAllButKitCheckUnderThresholdKitDenominationsGet((error, data, response) => {
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

[**[KitDenomination]**](KitDenomination.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1OperationTransferAllButKitConfigurationGet"></a>
# **apiV1OperationTransferAllButKitConfigurationGet**
> MinimumKitConfiguration apiV1OperationTransferAllButKitConfigurationGet()

Function to read minimum kit configured

Function to read the current minimum kit set on the device

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferAllButKitApi();
apiInstance.apiV1OperationTransferAllButKitConfigurationGet((error, data, response) => {
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

[**MinimumKitConfiguration**](MinimumKitConfiguration.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1OperationTransferAllButKitConfigurationPost"></a>
# **apiV1OperationTransferAllButKitConfigurationPost**
> apiV1OperationTransferAllButKitConfigurationPost(opts)

Function to set the Minimum Kit

Function to save a new minimum kit on the device

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferAllButKitApi();
let opts = { 
  'body': new InLaneApi.MinimumKitConfiguration() // MinimumKitConfiguration | Object containing the new minimum kit to be saved
};
apiInstance.apiV1OperationTransferAllButKitConfigurationPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinimumKitConfiguration**](MinimumKitConfiguration.md)| Object containing the new minimum kit to be saved | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationTransferAllButKitStartPost"></a>
# **apiV1OperationTransferAllButKitStartPost**
> StartOperationResponse apiV1OperationTransferAllButKitStartPost(body, opts)

Start a new transfer all but kit operation

Request to start a new transfer all but minimum kit operation.  This functionality allows to move automatically all the cash exceeding the minimum kit configured on the device to a cassette or a bag (depending on the InLane model).  From the banknotes stocks it is possible to move the banknotes to the cassette or in the bag but only in the InLane Depo models.  From the coins stocks it is possible to move the coins to the bag only in the InLane Depo models.  Example: with InLane 300 it is possible to move only the banknotes to the cassette.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferAllButKitApi();
let body = new InLaneApi.StartTransferAllButKitClientReqData(); // StartTransferAllButKitClientReqData | Object containing the stock index destination for this transfer all but kit operation
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationTransferAllButKitStartPost(body, opts, (error, data, response) => {
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
 **body** | [**StartTransferAllButKitClientReqData**](StartTransferAllButKitClientReqData.md)| Object containing the stock index destination for this transfer all but kit operation | 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationTransferAllButKitStatusGet"></a>
# **apiV1OperationTransferAllButKitStatusGet**
> TransferAllButKitOperationStatus apiV1OperationTransferAllButKitStatusGet()

Retrieve the status of the transfer all but kit operation

Request to retrieve the status of the transfer all but kit operation, once the transfer is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransferAllButKitApi();
apiInstance.apiV1OperationTransferAllButKitStatusGet((error, data, response) => {
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

[**TransferAllButKitOperationStatus**](TransferAllButKitOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

