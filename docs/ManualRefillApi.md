# InLaneApi.ManualRefillApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationManualRefillNewContentPost**](ManualRefillApi.md#apiV1OperationManualRefillNewContentPost) | **POST** /api/v1/operation/ManualRefill/newContent | Command to send the new content to the machine
[**apiV1OperationManualRefillStartPost**](ManualRefillApi.md#apiV1OperationManualRefillStartPost) | **POST** /api/v1/operation/ManualRefill/start | Start a new manual refill operation to change manually the device content
[**apiV1OperationManualRefillStatusGet**](ManualRefillApi.md#apiV1OperationManualRefillStatusGet) | **GET** /api/v1/operation/ManualRefill/status | Retrieve the status of the manual refill operation

<a name="apiV1OperationManualRefillNewContentPost"></a>
# **apiV1OperationManualRefillNewContentPost**
> apiV1OperationManualRefillNewContentPost(opts)

Command to send the new content to the machine

It is required to send this command when the manualReillOperationStatus is ManualRefillStatusEnum.WaitNewContent to set the new device status  New content example  POST request to save new datetime on the machine. Sample request:        POST api/v1/operation/manualRefile/newContent      [         {            \&quot;denomination\&quot;:{               \&quot;currency\&quot;:\&quot;CIM\&quot;,               \&quot;value\&quot;:5,               \&quot;cashType\&quot;:\&quot;banknote\&quot;            },            \&quot;quantity\&quot;:5,            \&quot;stockIndex\&quot;:3         },         {            \&quot;denomination\&quot;:{               \&quot;currency\&quot;:\&quot;CIM\&quot;,               \&quot;value\&quot;:20,               \&quot;cashType\&quot;:\&quot;banknote\&quot;            },            \&quot;quantity\&quot;:-3,            \&quot;stockIndex\&quot;:3         },         {            \&quot;denomination\&quot;:{               \&quot;currency\&quot;:\&quot;EUR\&quot;,               \&quot;value\&quot;:0.01,               \&quot;cashType\&quot;:\&quot;coin\&quot;            },            \&quot;quantity\&quot;:-3,            \&quot;stockIndex\&quot;:5         }      ]

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ManualRefillApi();
let opts = { 
  'body': [new InLaneApi.CashContent()] // [CashContent] | 
};
apiInstance.apiV1OperationManualRefillNewContentPost(opts, (error, data, response) => {
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
 **body** | [**[CashContent]**](CashContent.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationManualRefillStartPost"></a>
# **apiV1OperationManualRefillStartPost**
> StartOperationResponse apiV1OperationManualRefillStartPost(opts)

Start a new manual refill operation to change manually the device content

Request to start a new manual refill operation, to manually change the device content

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ManualRefillApi();
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationManualRefillStartPost(opts, (error, data, response) => {
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

<a name="apiV1OperationManualRefillStatusGet"></a>
# **apiV1OperationManualRefillStatusGet**
> ManualRefillOperationStatus apiV1OperationManualRefillStatusGet()

Retrieve the status of the manual refill operation

Request to retrieve the status of the manual refill operation

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ManualRefillApi();
apiInstance.apiV1OperationManualRefillStatusGet((error, data, response) => {
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

[**ManualRefillOperationStatus**](ManualRefillOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

