# InLaneApi.DeviceInfoApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DeviceInfoConfigurationGet**](DeviceInfoApi.md#apiV1DeviceInfoConfigurationGet) | **GET** /api/v1/DeviceInfo/configuration | Retrieve the stocks configurations
[**apiV1DeviceInfoCurrencyExchangeRatesGet**](DeviceInfoApi.md#apiV1DeviceInfoCurrencyExchangeRatesGet) | **GET** /api/v1/DeviceInfo/currencyExchangeRates | Retrieve currency exchange rates
[**apiV1DeviceInfoCurrencyExchangeRatesPost**](DeviceInfoApi.md#apiV1DeviceInfoCurrencyExchangeRatesPost) | **POST** /api/v1/DeviceInfo/currencyExchangeRates | Save new exchange rates on the machine
[**apiV1DeviceInfoGet**](DeviceInfoApi.md#apiV1DeviceInfoGet) | **GET** /api/v1/DeviceInfo | Retrieve the device information
[**apiV1DeviceInfoMainCurrencyGet**](DeviceInfoApi.md#apiV1DeviceInfoMainCurrencyGet) | **GET** /api/v1/DeviceInfo/mainCurrency | Retrieve main currency

<a name="apiV1DeviceInfoConfigurationGet"></a>
# **apiV1DeviceInfoConfigurationGet**
> [StockConfiguration] apiV1DeviceInfoConfigurationGet()

Retrieve the stocks configurations

This request returns the details of each stock and the denominations configured in each one.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.DeviceInfoApi();
apiInstance.apiV1DeviceInfoConfigurationGet((error, data, response) => {
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

[**[StockConfiguration]**](StockConfiguration.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DeviceInfoCurrencyExchangeRatesGet"></a>
# **apiV1DeviceInfoCurrencyExchangeRatesGet**
> [ExchangeRate] apiV1DeviceInfoCurrencyExchangeRatesGet()

Retrieve currency exchange rates

Request to retrieve the device current exchange rates  Example using main currency EUR and secondary currency USD: [ {\&quot;currency\&quot;: \&quot;USD\&quot;, \&quot;ratio\&quot;:1.25 } ] will result in 1 USD &#x3D; 1.25 EUR

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.DeviceInfoApi();
apiInstance.apiV1DeviceInfoCurrencyExchangeRatesGet((error, data, response) => {
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

[**[ExchangeRate]**](ExchangeRate.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DeviceInfoCurrencyExchangeRatesPost"></a>
# **apiV1DeviceInfoCurrencyExchangeRatesPost**
> apiV1DeviceInfoCurrencyExchangeRatesPost(body)

Save new exchange rates on the machine

Request to change the currency exchange rates.  Example using main currency EUR and secondary currency USD: [ {\&quot;currency\&quot;: \&quot;USD\&quot;, \&quot;ratio\&quot;:1.25 } ] will result in 1 USD &#x3D; 1.25 EUR

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.DeviceInfoApi();
let body = [new InLaneApi.ExchangeRate()]; // [ExchangeRate] | The list of exchange rates with secondary currency and its ratio.

apiInstance.apiV1DeviceInfoCurrencyExchangeRatesPost(body, (error, data, response) => {
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
 **body** | [**[ExchangeRate]**](ExchangeRate.md)| The list of exchange rates with secondary currency and its ratio. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiV1DeviceInfoGet"></a>
# **apiV1DeviceInfoGet**
> DeviceInfoResponse apiV1DeviceInfoGet()

Retrieve the device information

GET request to retrive the device information. Sample request:        GET api/v1/DeviceInfo

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.DeviceInfoApi();
apiInstance.apiV1DeviceInfoGet((error, data, response) => {
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

[**DeviceInfoResponse**](DeviceInfoResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1DeviceInfoMainCurrencyGet"></a>
# **apiV1DeviceInfoMainCurrencyGet**
> CurrencyString apiV1DeviceInfoMainCurrencyGet()

Retrieve main currency

Request to retrieve the device current exchange rates

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.DeviceInfoApi();
apiInstance.apiV1DeviceInfoMainCurrencyGet((error, data, response) => {
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

[**CurrencyString**](CurrencyString.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

