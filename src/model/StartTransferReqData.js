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
import {TransferSource} from './TransferSource';

/**
 * The StartTransferReqData model module.
 * @module model/StartTransferReqData
 * @version v1
 */
export class StartTransferReqData {
  /**
   * Constructs a new <code>StartTransferReqData</code>.
   * @alias module:model/StartTransferReqData
   * @class
   * @param sources {Array.<module:model/TransferSource>} Array of sources and quantities
   * @param destinationIndex {Number} Destination stock index (bag or cassette)
   */
  constructor(sources, destinationIndex) {
    this.sources = sources;
    this.destinationIndex = destinationIndex;
  }

  /**
   * Constructs a <code>StartTransferReqData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StartTransferReqData} obj Optional instance to populate.
   * @return {module:model/StartTransferReqData} The populated <code>StartTransferReqData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StartTransferReqData();
      if (data.hasOwnProperty('sources'))
        obj.sources = ApiClient.convertToType(data['sources'], [TransferSource]);
      if (data.hasOwnProperty('destinationIndex'))
        obj.destinationIndex = ApiClient.convertToType(data['destinationIndex'], 'Number');
    }
    return obj;
  }
}

/**
 * Array of sources and quantities
 * @member {Array.<module:model/TransferSource>} sources
 */
StartTransferReqData.prototype.sources = undefined;

/**
 * Destination stock index (bag or cassette)
 * @member {Number} destinationIndex
 */
StartTransferReqData.prototype.destinationIndex = undefined;
