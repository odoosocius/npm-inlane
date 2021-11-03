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
import {ApiClient} from '../ApiClient';

/**
 * The CurrencyString model module.
 * @module model/CurrencyString
 * @version v1
 */
export class CurrencyString {
  /**
   * Constructs a new <code>CurrencyString</code>.
   * @alias module:model/CurrencyString
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CurrencyString</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencyString} obj Optional instance to populate.
   * @return {module:model/CurrencyString} The populated <code>CurrencyString</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CurrencyString();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
    }
    return obj;
  }
}

/**
 * Currency
 * @member {String} currency
 */
CurrencyString.prototype.currency = undefined;
