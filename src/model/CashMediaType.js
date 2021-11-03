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
 * Enum class CashMediaType.
 * @enum {String}
 * @readonly
 */
const CashMediaType = {
  /**
   * value: "banknote"
   * @const
   */
  banknote: "banknote",

  /**
   * value: "coin"
   * @const
   */
  coin: "coin",

  /**
   * Returns a <code>CashMediaType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/CashMediaType} The enum <code>CashMediaType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CashMediaType};