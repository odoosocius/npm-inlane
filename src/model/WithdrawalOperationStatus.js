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
 * The WithdrawalOperationStatus model module.
 * @module model/WithdrawalOperationStatus
 * @version v1
 */
export class WithdrawalOperationStatus {
  /**
   * Constructs a new <code>WithdrawalOperationStatus</code>.
   * @alias module:model/WithdrawalOperationStatus
   * @class
   * @param dispenseCounting {Array.<module:model/CashCount>} Dispense counting
   * @param dispenseStatus {module:model/DispenseStatus} 
   * @param status {module:model/OperationStatusEnum} 
   * @param errorDescription {module:model/ErrorCode} 
   */
  constructor(dispenseCounting, dispenseStatus, status, errorDescription) {
    this.dispenseCounting = dispenseCounting;
    this.dispenseStatus = dispenseStatus;
    this.status = status;
    this.errorDescription = errorDescription;
  }

  /**
   * Constructs a <code>WithdrawalOperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WithdrawalOperationStatus} obj Optional instance to populate.
   * @return {module:model/WithdrawalOperationStatus} The populated <code>WithdrawalOperationStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WithdrawalOperationStatus();
      if (data.hasOwnProperty('dispenseCounting'))
        obj.dispenseCounting = ApiClient.convertToType(data['dispenseCounting'], [CashCount]);
      if (data.hasOwnProperty('dispenseStatus'))
        obj.dispenseStatus = DispenseStatus.constructFromObject(data['dispenseStatus']);
      if (data.hasOwnProperty('status'))
        obj.status = OperationStatusEnum.constructFromObject(data['status']);
      if (data.hasOwnProperty('errorDescription'))
        obj.errorDescription = ErrorCode.constructFromObject(data['errorDescription']);
    }
    return obj;
  }
}

/**
 * Dispense counting
 * @member {Array.<module:model/CashCount>} dispenseCounting
 */
WithdrawalOperationStatus.prototype.dispenseCounting = undefined;

/**
 * @member {module:model/DispenseStatus} dispenseStatus
 */
WithdrawalOperationStatus.prototype.dispenseStatus = undefined;

/**
 * @member {module:model/OperationStatusEnum} status
 */
WithdrawalOperationStatus.prototype.status = undefined;

/**
 * @member {module:model/ErrorCode} errorDescription
 */
WithdrawalOperationStatus.prototype.errorDescription = undefined;

