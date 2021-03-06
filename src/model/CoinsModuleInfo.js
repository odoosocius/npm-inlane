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
import {CoinBagTypeEnum} from './CoinBagTypeEnum';

/**
 * The CoinsModuleInfo model module.
 * @module model/CoinsModuleInfo
 * @version v1
 */
export class CoinsModuleInfo {
  /**
   * Constructs a new <code>CoinsModuleInfo</code>.
   * @alias module:model/CoinsModuleInfo
   * @class
   * @param firmware {String} Module firmware
   */
  constructor(firmware) {
    this.firmware = firmware;
  }

  /**
   * Constructs a <code>CoinsModuleInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoinsModuleInfo} obj Optional instance to populate.
   * @return {module:model/CoinsModuleInfo} The populated <code>CoinsModuleInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CoinsModuleInfo();
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], 'String');
      if (data.hasOwnProperty('serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'String');
      if (data.hasOwnProperty('firmware'))
        obj.firmware = ApiClient.convertToType(data['firmware'], 'String');
      if (data.hasOwnProperty('sensorFirmware'))
        obj.sensorFirmware = ApiClient.convertToType(data['sensorFirmware'], 'String');
      if (data.hasOwnProperty('bag'))
        obj.bag = CoinBagTypeEnum.constructFromObject(data['bag']);
    }
    return obj;
  }
}

/**
 * Module model
 * @member {String} model
 */
CoinsModuleInfo.prototype.model = undefined;

/**
 * Module SerialNumber
 * @member {String} serialNumber
 */
CoinsModuleInfo.prototype.serialNumber = undefined;

/**
 * Module firmware
 * @member {String} firmware
 */
CoinsModuleInfo.prototype.firmware = undefined;

/**
 * Recognition Sensor firmware
 * @member {String} sensorFirmware
 */
CoinsModuleInfo.prototype.sensorFirmware = undefined;

/**
 * @member {module:model/CoinBagTypeEnum} bag
 */
CoinsModuleInfo.prototype.bag = undefined;

