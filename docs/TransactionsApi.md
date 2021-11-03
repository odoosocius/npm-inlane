# InLaneApi.TransactionsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1TransactionsGet**](TransactionsApi.md#apiV1TransactionsGet) | **GET** /api/v1/Transactions | Retrieve the details of a single committed transaction by id or by reference

<a name="apiV1TransactionsGet"></a>
# **apiV1TransactionsGet**
> TransactionResponse apiV1TransactionsGet(opts)

Retrieve the details of a single committed transaction by id or by reference

Request to get the details of a single committed transaction by id or by reference (so only transaction already finished).  If both id and reference are defined in the request, it will return a transaction only if exists a transaction with that id AND that reference.  So it is easier to use in the request or transaction id or transaction reference, not both.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.TransactionsApi();
let opts = { 
  'transactionId': 56, // Number | transaction id
  'transactionRef': "transactionRef_example" // String | transaction reference
};
apiInstance.apiV1TransactionsGet(opts, (error, data, response) => {
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
 **transactionId** | **Number**| transaction id | [optional] 
 **transactionRef** | **String**| transaction reference | [optional] 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

