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
 * Enum class CassetteCollectionStatusEnum.
 * @enum {String}
 * @readonly
 */
const CassetteCollectionStatusEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "waitingCoverOpen"
   * @const
   */
  waitingCoverOpen: "waitingCoverOpen",

  /**
   * value: "waitingCassetteRemoval"
   * @const
   */
  waitingCassetteRemoval: "waitingCassetteRemoval",

  /**
   * value: "askCassetteHookRelease"
   * @const
   */
  askCassetteHookRelease: "askCassetteHookRelease",

  /**
   * value: "insertCassetteAndCloseCover"
   * @const
   */
  insertCassetteAndCloseCover: "insertCassetteAndCloseCover",

  /**
   * value: "completed"
   * @const
   */
  completed: "completed",

  /**
   * value: "faulted"
   * @const
   */
  faulted: "faulted",

  /**
   * Returns a <code>CassetteCollectionStatusEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/CassetteCollectionStatusEnum} The enum <code>CassetteCollectionStatusEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {CassetteCollectionStatusEnum};