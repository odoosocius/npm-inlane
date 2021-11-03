# InLaneApi.WithdrawalApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OperationWithdrawalStartByCurrencyAmountPost**](WithdrawalApi.md#apiV1OperationWithdrawalStartByCurrencyAmountPost) | **POST** /api/v1/operation/Withdrawal/startByCurrencyAmount | Start new withdrawal operation by currency amount
[**apiV1OperationWithdrawalStartByDenominationPost**](WithdrawalApi.md#apiV1OperationWithdrawalStartByDenominationPost) | **POST** /api/v1/operation/Withdrawal/startByDenomination | Start new withdrawal operation by denomination
[**apiV1OperationWithdrawalStatusGet**](WithdrawalApi.md#apiV1OperationWithdrawalStatusGet) | **GET** /api/v1/operation/Withdrawal/status | Retrieve the status of the transfer operation

<a name="apiV1OperationWithdrawalStartByCurrencyAmountPost"></a>
# **apiV1OperationWithdrawalStartByCurrencyAmountPost**
> StartOperationResponse apiV1OperationWithdrawalStartByCurrencyAmountPost(opts)

Start new withdrawal operation by currency amount

Request to start a new withdrawal operation.  This functionality allows to withdrawal cash from the machine, specifying the currency and the amount to withdraw

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.WithdrawalApi();
let opts = { 
  'body': new InLaneApi.CurrencyAmount(), // CurrencyAmount | Object containing the currency and the amount to withdraw
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationWithdrawalStartByCurrencyAmountPost(opts, (error, data, response) => {
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
 **body** | [**CurrencyAmount**](CurrencyAmount.md)| Object containing the currency and the amount to withdraw | [optional] 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationWithdrawalStartByDenominationPost"></a>
# **apiV1OperationWithdrawalStartByDenominationPost**
> StartOperationResponse apiV1OperationWithdrawalStartByDenominationPost(opts)

Start new withdrawal operation by denomination

Request to start a new withdrawal operation.  This functionality allows to withdrawal cash from the machine, specifying the list of denominations and their quantities

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.WithdrawalApi();
let opts = { 
  'body': [new InLaneApi.CashDetail()], // [CashDetail] | Object containing the list of cash detail to withdraw, quantities and denominations
  'transactionRef': "transactionRef_example" // String | Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier)
};
apiInstance.apiV1OperationWithdrawalStartByDenominationPost(opts, (error, data, response) => {
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
 **body** | [**[CashDetail]**](CashDetail.md)| Object containing the list of cash detail to withdraw, quantities and denominations | [optional] 
 **transactionRef** | **String**| Optional text to be linked to the transaction (for example it could be the transaction identifier in the client application or the POS transaction identifier or the ticket identifier) | [optional] 

### Return type

[**StartOperationResponse**](StartOperationResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: application/json

<a name="apiV1OperationWithdrawalStatusGet"></a>
# **apiV1OperationWithdrawalStatusGet**
> WithdrawalOperationStatus apiV1OperationWithdrawalStatusGet()

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

let apiInstance = new InLaneApi.WithdrawalApi();
apiInstance.apiV1OperationWithdrawalStatusGet((error, data, response) => {
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

[**WithdrawalOperationStatus**](WithdrawalOperationStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

