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
import {Denomination} from './Denomination';

/**
 * The KitDenomination model module.
 * @module model/KitDenomination
 * @version v1
 */
export class KitDenomination {
  /**
   * Constructs a new <code>KitDenomination</code>.
   * @alias module:model/KitDenomination
   * @class
   * @param denomination {module:model/Denomination} 
   * @param quantity {Number} Quantity
   */
  constructor(denomination, quantity) {
    this.denomination = denomination;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>KitDenomination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KitDenomination} obj Optional instance to populate.
   * @return {module:model/KitDenomination} The populated <code>KitDenomination</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new KitDenomination();
      if (data.hasOwnProperty('balance'))
        obj.balance = ApiClient.convertToType(data['balance'], 'Number');
      if (data.hasOwnProperty('expectedMinimumQuantity'))
        obj.expectedMinimumQuantity = ApiClient.convertToType(data['expectedMinimumQuantity'], 'Number');
      if (data.hasOwnProperty('denomination'))
        obj.denomination = Denomination.constructFromObject(data['denomination']);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
    }
    return obj;
  }
}

/**
 * Balance for the current denomination compared to the minimum kit  If greater than 0 there are more pieces than the minimum kit  If lesser than 0 there are less pieces than the minimum kit
 * @member {Number} balance
 */
KitDenomination.prototype.balance = undefined;

/**
 * Minimum kit quantity
 * @member {Number} expectedMinimumQuantity
 */
KitDenomination.prototype.expectedMinimumQuantity = undefined;

/**
 * @member {module:model/Denomination} denomination
 */
KitDenomination.prototype.denomination = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
KitDenomination.prototype.quantity = undefined;

