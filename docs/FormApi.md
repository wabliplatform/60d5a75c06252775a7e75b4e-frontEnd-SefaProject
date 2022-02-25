# TempApi.FormApi

All URIs are relative to *http://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createform**](FormApi.md#createform) | **POST** /form | Creates the data
[**deleteform**](FormApi.md#deleteform) | **DELETE** /form/{formId} | Delete the element
[**getAllform**](FormApi.md#getAllform) | **GET** /form/getAll | Get all the data
[**getform**](FormApi.md#getform) | **GET** /form/{formId} | Get the element
[**updateform**](FormApi.md#updateform) | **PUT** /form/{formId} | Updates the element



## createform

> Form createform(form)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.FormApi();
let form = new TempApi.Form(); // Form | data to be created
apiInstance.createform(form, (error, data, response) => {
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
 **form** | [**Form**](Form.md)| data to be created | 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteform

> deleteform(formId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.FormApi();
let formId = "formId_example"; // String | the Id parameter
apiInstance.deleteform(formId, (error, data, response) => {
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
 **formId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllform

> [Form] getAllform()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.FormApi();
apiInstance.getAllform((error, data, response) => {
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

[**[Form]**](Form.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getform

> Form getform(formId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.FormApi();
let formId = "formId_example"; // String | the Id parameter
apiInstance.getform(formId, (error, data, response) => {
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
 **formId** | **String**| the Id parameter | 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateform

> Form updateform(formId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.FormApi();
let formId = "formId_example"; // String | the Id parameter
let opts = {
  'form': new TempApi.Form() // Form | data to be updated
};
apiInstance.updateform(formId, opts, (error, data, response) => {
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
 **formId** | **String**| the Id parameter | 
 **form** | [**Form**](Form.md)| data to be updated | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

