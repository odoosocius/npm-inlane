# InLaneApi.PaymentApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationPaymentEndPost**](PaymentApi.md#apiV1OperationPaymentEndPost) | **POST** /api/v1/operation/Payment/end | Stop the payment operation during the deposit phase
[**apiV1OperationPaymentStartPost**](PaymentApi.md#apiV1OperationPaymentStartPost) | **POST** /api/v1/operation/Payment/start | Start a new payment operation (from the deposit to the dispensation of the change if necessary)
[**apiV1OperationPaymentStatusGet**](PaymentApi.md#apiV1OperationPaymentStatusGet) | **GET** /api/v1/operation/Payment/status | Retrieve the status of the payment operation

<a name="apiV1OperationPaymentEndPost"></a>
# **apiV1OperationPaymentEndPost**
> apiV1OperationPaymentEndPost(opts)

Stop the payment operation during the deposit phase

Request to stop the payment operation in progress during the deposit phase. The deposited cash will not be returned to the user.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.PaymentApi();
let opts = { 
  'body': new InLaneApi.StopPaymentReqData() // StopPaymentReqData | Object containing the parameter to enable the rollback of the deposited amount
};
apiInstance.apiV1OperationPaymentEndPost(opts, (error, data, response) => {
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
 **body** | [**StopPaymentReqData**](StopPaymentReqData.md)| Object containing the parameter to enable the rollback of the deposited amount | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationPaymentStartPost"></a>
# **apiV1OperationPaymentStartPost**
> StartOperationResponse apiV1OperationPaymentStartPost(body, opts)

Start a new payment operation (from the deposit to the dispensation of the change if necessary)

Request to start a new payment operation.  This functionality allows to pay the amount passed as parameter.  It automatically manages the deposit phase, the calculation of the change and if necessary the withdrawal phase.  The payment flow will be automatically stopped if the web API does not receive any payment status request for more than 1 minute during the deposit phase.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.PaymentApi();
let body = new InLaneApi.StartPaymentReqData(); // StartPaymentReqData | Object containing the details about the sources, quantities and destination of this transfer operation
let opts = { 
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationPaymentStartPost(body, opts, (error, data, response) => {
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
 **body** | [**StartPaymentReqData**](StartPaymentReqData.md)| Object containing the details about the sources, quantities and destination of this transfer operation | 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationPaymentStatusGet"></a>
# **apiV1OperationPaymentStatusGet**
> PaymentOperationStatus apiV1OperationPaymentStatusGet()

Retrieve the status of the payment operation

Request to retrieve the status of the payment operation, once the payment is started - minimum time between 2 requests 300ms

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.PaymentApi();
apiInstance.apiV1OperationPaymentStatusGet((error, data, response) => {
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

[**PaymentOperationStatus**](PaymentOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

