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
import {CurrencyAmount} from './CurrencyAmount';
import {ErrorCode} from './ErrorCode';
import {OperationStatusEnum} from './OperationStatusEnum';
import {PaymentStatusEnum} from './PaymentStatusEnum';

/**
 * The PaymentOperationStatus model module.
 * @module model/PaymentOperationStatus
 * @version v1
 */
export class PaymentOperationStatus {
  /**
   * Constructs a new <code>PaymentOperationStatus</code>.
   * @alias module:model/PaymentOperationStatus
   * @class
   * @param paymentStatus {module:model/PaymentStatusEnum} 
   * @param depositCounting {Array.<module:model/CashCount>} Deposit Countings
   * @param depositTotal {Array.<module:model/CurrencyAmount>} Deposit operation totals by currency
   * @param dispenseCounting {Array.<module:model/CashCount>} Dispense countings (if change has been dispensed)
   * @param dispenseTotal {Array.<module:model/CurrencyAmount>} Dispense operation totals by currency
   * @param missingAmount {module:model/CurrencyAmount} 
   * @param status {module:model/OperationStatusEnum} 
   * @param errorDescription {module:model/ErrorCode} 
   */
  constructor(paymentStatus, depositCounting, depositTotal, dispenseCounting, dispenseTotal, missingAmount, status, errorDescription) {
    this.paymentStatus = paymentStatus;
    this.depositCounting = depositCounting;
    this.depositTotal = depositTotal;
    this.dispenseCounting = dispenseCounting;
    this.dispenseTotal = dispenseTotal;
    this.missingAmount = missingAmount;
    this.status = status;
    this.errorDescription = errorDescription;
  }

  /**
   * Constructs a <code>PaymentOperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentOperationStatus} obj Optional instance to populate.
   * @return {module:model/PaymentOperationStatus} The populated <code>PaymentOperationStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PaymentOperationStatus();
      if (data.hasOwnProperty('paymentStatus'))
        obj.paymentStatus = PaymentStatusEnum.constructFromObject(data['paymentStatus']);
      if (data.hasOwnProperty('depositCounting'))
        obj.depositCounting = ApiClient.convertToType(data['depositCounting'], [CashCount]);
      if (data.hasOwnProperty('depositTotal'))
        obj.depositTotal = ApiClient.convertToType(data['depositTotal'], [CurrencyAmount]);
      if (data.hasOwnProperty('dispenseCounting'))
        obj.dispenseCounting = ApiClient.convertToType(data['dispenseCounting'], [CashCount]);
      if (data.hasOwnProperty('dispenseTotal'))
        obj.dispenseTotal = ApiClient.convertToType(data['dispenseTotal'], [CurrencyAmount]);
      if (data.hasOwnProperty('missingAmount'))
        obj.missingAmount = CurrencyAmount.constructFromObject(data['missingAmount']);
      if (data.hasOwnProperty('status'))
        obj.status = OperationStatusEnum.constructFromObject(data['status']);
      if (data.hasOwnProperty('errorDescription'))
        obj.errorDescription = ErrorCode.constructFromObject(data['errorDescription']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PaymentStatusEnum} paymentStatus
 */
PaymentOperationStatus.prototype.paymentStatus = undefined;

/**
 * Deposit Countings
 * @member {Array.<module:model/CashCount>} depositCounting
 */
PaymentOperationStatus.prototype.depositCounting = undefined;

/**
 * Deposit operation totals by currency
 * @member {Array.<module:model/CurrencyAmount>} depositTotal
 */
PaymentOperationStatus.prototype.depositTotal = undefined;

/**
 * Dispense countings (if change has been dispensed)
 * @member {Array.<module:model/CashCount>} dispenseCounting
 */
PaymentOperationStatus.prototype.dispenseCounting = undefined;

/**
 * Dispense operation totals by currency
 * @member {Array.<module:model/CurrencyAmount>} dispenseTotal
 */
PaymentOperationStatus.prototype.dispenseTotal = undefined;

/**
 * @member {module:model/CurrencyAmount} missingAmount
 */
PaymentOperationStatus.prototype.missingAmount = undefined;

/**
 * @member {module:model/OperationStatusEnum} status
 */
PaymentOperationStatus.prototype.status = undefined;

/**
 * @member {module:model/ErrorCode} errorDescription
 */
PaymentOperationStatus.prototype.errorDescription = undefined;

