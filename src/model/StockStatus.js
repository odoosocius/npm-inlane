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
import {CashMediaType} from './CashMediaType';
import {StockStatusEnum} from './StockStatusEnum';
import {StockTypeEnum} from './StockTypeEnum';

/**
 * The StockStatus model module.
 * @module model/StockStatus
 * @version v1
 */
export class StockStatus {
  /**
   * Constructs a new <code>StockStatus</code>.
   * @alias module:model/StockStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StockStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockStatus} obj Optional instance to populate.
   * @return {module:model/StockStatus} The populated <code>StockStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StockStatus();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = StockStatusEnum.constructFromObject(data['status']);
      if (data.hasOwnProperty('stockType'))
        obj.stockType = StockTypeEnum.constructFromObject(data['stockType']);
      if (data.hasOwnProperty('cashMediaType'))
        obj.cashMediaType = CashMediaType.constructFromObject(data['cashMediaType']);
    }
    return obj;
  }
}

/**
 * Stock index
 * @member {Number} id
 */
StockStatus.prototype.id = undefined;

/**
 * @member {module:model/StockStatusEnum} status
 */
StockStatus.prototype.status = undefined;

/**
 * @member {module:model/StockTypeEnum} stockType
 */
StockStatus.prototype.stockType = undefined;

/**
 * @member {module:model/CashMediaType} cashMediaType
 */
StockStatus.prototype.cashMediaType = undefined;

