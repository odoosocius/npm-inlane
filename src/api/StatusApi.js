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
import {DeviceStatusResponse} from '../model/DeviceStatusResponse';
import {ProblemDetails} from '../model/ProblemDetails';

/**
* Status service.
* @module api/StatusApi
* @version v1
*/
export class StatusApi {

    /**
    * Constructs a new StatusApi. 
    * @alias module:api/StatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1StatusGet operation.
     * @callback moduleapi/StatusApi~apiV1StatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceStatusResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the device status
     * Request to retrive the device status.
     * @param {module:api/StatusApi~apiV1StatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiV1StatusGet(callback) {
      
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
      let returnType = DeviceStatusResponse;

      return this.apiClient.callApi(
        '/api/v1/Status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}