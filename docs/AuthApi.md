# InLaneApi.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AuthLoginPost**](AuthApi.md#apiV1AuthLoginPost) | **POST** /api/v1/Auth/login | Login a client app to the web api (Allowed requests without authentication token)

<a name="apiV1AuthLoginPost"></a>
# **apiV1AuthLoginPost**
> LoginResponse apiV1AuthLoginPost(body)

Login a client app to the web api (Allowed requests without authentication token)

Functionality to obtain the authentication token. It will:  * check the appId passed as parameter if is the same configured in the device  * use the username to associate operations and handle the multiple parallels connections to the same InLane device (every connection can login with the same appId but different username)

### Example
```javascript
import {InLaneApi} from 'in_lane_api';
let defaultClient = InLaneApi.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new InLaneApi.AuthApi();
let body = new InLaneApi.LoginRequest(); // LoginRequest | Object LoginRequest containing appId and username

apiInstance.apiV1AuthLoginPost(body, (error, data, response) => {
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
 **body** | [**LoginRequest**](LoginRequest.md)| Object LoginRequest containing appId and username | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

