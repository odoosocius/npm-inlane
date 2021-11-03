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
import {BagCollectionTypeEnum} from './BagCollectionTypeEnum';

/**
 * The StartBagCollectionReqData model module.
 * @module model/StartBagCollectionReqData
 * @version v1
 */
export class StartBagCollectionReqData {
  /**
   * Constructs a new <code>StartBagCollectionReqData</code>.
   * @alias module:model/StartBagCollectionReqData
   * @class
   * @param bagCollectionType {module:model/BagCollectionTypeEnum} 
   */
  constructor(bagCollectionType) {
    this.bagCollectionType = bagCollectionType;
  }

  /**
   * Constructs a <code>StartBagCollectionReqData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StartBagCollectionReqData} obj Optional instance to populate.
   * @return {module:model/StartBagCollectionReqData} The populated <code>StartBagCollectionReqData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StartBagCollectionReqData();
      if (data.hasOwnProperty('bagCollectionType'))
        obj.bagCollectionType = BagCollectionTypeEnum.constructFromObject(data['bagCollectionType']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BagCollectionTypeEnum} bagCollectionType
 */
StartBagCollectionReqData.prototype.bagCollectionType = undefined;

