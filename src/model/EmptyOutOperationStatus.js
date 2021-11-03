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
import {CashCount} from './CashCount';
import {DispenseStatus} from './DispenseStatus';
import {ErrorCode} from './ErrorCode';
import {OperationStatusEnum} from './OperationStatusEnum';

/**
 * The EmptyOutOperationStatus model module.
 * @module model/EmptyOutOperationStatus
 * @version v1
 */
export class EmptyOutOperationStatus {
  /**
   * Constructs a new <code>EmptyOutOperationStatus</code>.
   * @alias module:model/EmptyOutOperationStatus
   * @class
   * @param dispenseStatus {module:model/DispenseStatus} 
   * @param counting {Array.<module:model/CashCount>} Countings of the operation
   * @param status {module:model/OperationStatusEnum} 
   * @param errorDescription {module:model/ErrorCode} 
   */
  constructor(dispenseStatus, counting, status, errorDescription) {
    this.dispenseStatus = dispenseStatus;
    this.counting = counting;
    this.status = status;
    this.errorDescription = errorDescription;
  }

  /**
   * Constructs a <code>EmptyOutOperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmptyOutOperationStatus} obj Optional instance to populate.
   * @return {module:model/EmptyOutOperationStatus} The populated <code>EmptyOutOperationStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmptyOutOperationStatus();
      if (data.hasOwnProperty('dispenseStatus'))
        obj.dispenseStatus = DispenseStatus.constructFromObject(data['dispenseStatus']);
      if (data.hasOwnProperty('counting'))
        obj.counting = ApiClient.convertToType(data['counting'], [CashCount]);
      if (data.hasOwnProperty('status'))
        obj.status = OperationStatusEnum.constructFromObject(data['status']);
      if (data.hasOwnProperty('errorDescription'))
        obj.errorDescription = ErrorCode.constructFromObject(data['errorDescription']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DispenseStatus} dispenseStatus
 */
EmptyOutOperationStatus.prototype.dispenseStatus = undefined;

/**
 * Countings of the operation
 * @member {Array.<module:model/CashCount>} counting
 */
EmptyOutOperationStatus.prototype.counting = undefined;

/**
 * @member {module:model/OperationStatusEnum} status
 */
EmptyOutOperationStatus.prototype.status = undefined;

/**
 * @member {module:model/ErrorCode} errorDescription
 */
EmptyOutOperationStatus.prototype.errorDescription = undefined;

