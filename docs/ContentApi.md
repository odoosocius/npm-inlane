# InLaneApi.ContentApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ContentAlertsGet**](ContentApi.md#apiV1ContentAlertsGet) | **GET** /api/v1/Content/alerts | Retrieve denominations that are under or over existing thresholds.
[**apiV1ContentCountingGet**](ContentApi.md#apiV1ContentCountingGet) | **GET** /api/v1/Content/counting | Retrieve all device counting
[**apiV1ContentGet**](ContentApi.md#apiV1ContentGet) | **GET** /api/v1/Content | Retrieve the device content by stock
[**apiV1ContentResetCountingPost**](ContentApi.md#apiV1ContentResetCountingPost) | **POST** /api/v1/Content/resetCounting | Reset the content of a stock

<a name="apiV1ContentAlertsGet"></a>
# **apiV1ContentAlertsGet**
> [ContentAlert] apiV1ContentAlertsGet()

Retrieve denominations that are under or over existing thresholds.

Returns denominations that have an available quantity above the upper threshold or below the lower threshold.  In detail, compare the availability of the device with the configured thresholds.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ContentApi();
apiInstance.apiV1ContentAlertsGet((error, data, response) => {
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

[**[ContentAlert]**](ContentAlert.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ContentCountingGet"></a>
# **apiV1ContentCountingGet**
> DeviceCountingResponse apiV1ContentCountingGet()

Retrieve all device counting

Request to retrieve device all device counting.

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ContentApi();
apiInstance.apiV1ContentCountingGet((error, data, response) => {
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

[**DeviceCountingResponse**](DeviceCountingResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ContentGet"></a>
# **apiV1ContentGet**
> DeviceContentResponse apiV1ContentGet()

Retrieve the device content by stock

Request to retrieve device content by stock

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ContentApi();
apiInstance.apiV1ContentGet((error, data, response) => {
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

[**DeviceContentResponse**](DeviceContentResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1ContentResetCountingPost"></a>
# **apiV1ContentResetCountingPost**
> apiV1ContentResetCountingPost(body)

Reset the content of a stock

POST request to reset the content of the stocks whose index are passed as parameter. Sample request:        POST api/v1/Content/resetCounting      [ 0, 2 ]

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.ContentApi();
let body = [3.4]; // [Number] | Indexes of the stocks whose content you would like to reset

apiInstance.apiV1ContentResetCountingPost(body, (error, data, response) => {
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
 **body** | [**[Number]**](Number.md)| Indexes of the stocks whose content you would like to reset | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

