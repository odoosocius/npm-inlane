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
 * Enum class CoinBagTypeEnum.
 * @enum {String}
 * @readonly
 */
const CoinBagTypeEnum = {
  /**
   * value: "plastic"
   * @const
   */
  plastic: "plastic",

  /**
   * value: "canvas"
   * @const
   */
  canvas: "canvas",

  /**
   * value: "trolley"
   * @const
   */
  trolley: "trolley",

  /**
   * value: "metalBox"
   * @const
   */
  metalBox: "metalBox",

  /**
   * value: "box"
   * @const
   */
  box: "box",

  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "unknown"
   * @const
   */
  unknown: "unknown",

  /**
   * Returns a <code>CoinBagTypeEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/CoinBagTypeEnum} The enum <code>CoinBagTypeEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CoinBagTypeEnum};