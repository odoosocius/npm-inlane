/*
 * InLane API
 * InLane communication Web Api
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {CommandFailedResponse} from '../model/CommandFailedResponse';
import {CurrencyString} from '../model/CurrencyString';
import {DeviceInfoResponse} from '../model/DeviceInfoResponse';
import {ExchangeRate} from '../model/ExchangeRate';
import {ProblemDetails} from '../model/ProblemDetails';
import {StockConfiguration} from '../model/StockConfiguration';

/**
* DeviceInfo service.
* @module api/DeviceInfoApi
* @version v1
*/
export class DeviceInfoApi {

    /**
    * Constructs a new DeviceInfoApi. 
    * @alias module:api/DeviceInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1DeviceInfoConfigurationGet operation.
     * @callback moduleapi/DeviceInfoApi~apiV1DeviceInfoConfigurationGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/StockConfiguration>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the stocks configurations
     * This request returns the details of each stock and the denominations configured in each one.
     * @param {module:api/DeviceInfoApi~apiV1DeviceInfoConfigurationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1DeviceInfoConfigurationGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [StockConfiguration];

      return this.apiClient.callApi(
        '/api/v1/DeviceInfo/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1DeviceInfoCurrencyExchangeRatesGet operation.
     * @callback moduleapi/DeviceInfoApi~apiV1DeviceInfoCurrencyExchangeRatesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExchangeRate>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve currency exchange rates
     * Request to retrieve the device current exchange rates  Example using main currency EUR and secondary currency USD: [ {\&quot;currency\&quot;: \&quot;USD\&quot;, \&quot;ratio\&quot;:1.25 } ] will result in 1 USD &#x3D; 1.25 EUR
     * @param {module:api/DeviceInfoApi~apiV1DeviceInfoCurrencyExchangeRatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1DeviceInfoCurrencyExchangeRatesGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ExchangeRate];

      return this.apiClient.callApi(
        '/api/v1/DeviceInfo/currencyExchangeRates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1DeviceInfoCurrencyExchangeRatesPost operation.
     * @callback moduleapi/DeviceInfoApi~apiV1DeviceInfoCurrencyExchangeRatesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save new exchange rates on the machine
     * Request to change the currency exchange rates.  Example using main currency EUR and secondary currency USD: [ {\&quot;currency\&quot;: \&quot;USD\&quot;, \&quot;ratio\&quot;:1.25 } ] will result in 1 USD &#x3D; 1.25 EUR
     * @param {Array.<module:model/ExchangeRate>} body The list of exchange rates with secondary currency and its ratio.
     * @param {module:api/DeviceInfoApi~apiV1DeviceInfoCurrencyExchangeRatesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV1DeviceInfoCurrencyExchangeRatesPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiV1DeviceInfoCurrencyExchangeRatesPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/v1/DeviceInfo/currencyExchangeRates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1DeviceInfoGet operation.
     * @callback moduleapi/DeviceInfoApi~apiV1DeviceInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceInfoResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the device information
     * GET request to retrive the device information. Sample request:        GET api/v1/DeviceInfo
     * @param {module:api/DeviceInfoApi~apiV1DeviceInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1DeviceInfoGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeviceInfoResponse;

      return this.apiClient.callApi(
        '/api/v1/DeviceInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiV1DeviceInfoMainCurrencyGet operation.
     * @callback moduleapi/DeviceInfoApi~apiV1DeviceInfoMainCurrencyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrencyString{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve main currency
     * Request to retrieve the device current exchange rates
     * @param {module:api/DeviceInfoApi~apiV1DeviceInfoMainCurrencyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1DeviceInfoMainCurrencyGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CurrencyString;

      return this.apiClient.callApi(
        '/api/v1/DeviceInfo/mainCurrency', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}