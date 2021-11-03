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
import {BagCollectionStatusEnum} from './BagCollectionStatusEnum';
import {CashContent} from './CashContent';
import {ErrorCode} from './ErrorCode';
import {OperationStatusEnum} from './OperationStatusEnum';

/**
 * The BagCollectionOperationStatus model module.
 * @module model/BagCollectionOperationStatus
 * @version v1
 */
export class BagCollectionOperationStatus {
  /**
   * Constructs a new <code>BagCollectionOperationStatus</code>.
   * @alias module:model/BagCollectionOperationStatus
   * @class
   * @param bagCollectionStatus {module:model/BagCollectionStatusEnum} 
   * @param bagCollectionCashContentList {Array.<module:model/CashContent>} Content of the bag/bags removed
   * @param status {module:model/OperationStatusEnum} 
   * @param errorDescription {module:model/ErrorCode} 
   */
  constructor(bagCollectionStatus, bagCollectionCashContentList, status, errorDescription) {
    this.bagCollectionStatus = bagCollectionStatus;
    this.bagCollectionCashContentList = bagCollectionCashContentList;
    this.status = status;
    this.errorDescription = errorDescription;
  }

  /**
   * Constructs a <code>BagCollectionOperationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BagCollectionOperationStatus} obj Optional instance to populate.
   * @return {module:model/BagCollectionOperationStatus} The populated <code>BagCollectionOperationStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BagCollectionOperationStatus();
      if (data.hasOwnProperty('bagCollectionStatus'))
        obj.bagCollectionStatus = BagCollectionStatusEnum.constructFromObject(data['bagCollectionStatus']);
      if (data.hasOwnProperty('bagCollectionCashContentList'))
        obj.bagCollectionCashContentList = ApiClient.convertToType(data['bagCollectionCashContentList'], [CashContent]);
      if (data.hasOwnProperty('status'))
        obj.status = OperationStatusEnum.constructFromObject(data['status']);
      if (data.hasOwnProperty('errorDescription'))
        obj.errorDescription = ErrorCode.constructFromObject(data['errorDescription']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BagCollectionStatusEnum} bagCollectionStatus
 */
BagCollectionOperationStatus.prototype.bagCollectionStatus = undefined;

/**
 * Content of the bag/bags removed
 * @member {Array.<module:model/CashContent>} bagCollectionCashContentList
 */
BagCollectionOperationStatus.prototype.bagCollectionCashContentList = undefined;

/**
 * @member {module:model/OperationStatusEnum} status
 */
BagCollectionOperationStatus.prototype.status = undefined;

/**
 * @member {module:model/ErrorCode} errorDescription
 */
BagCollectionOperationStatus.prototype.errorDescription = undefined;
