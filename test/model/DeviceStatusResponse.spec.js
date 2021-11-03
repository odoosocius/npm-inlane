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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InLaneApi);
  }
}(this, function(expect, InLaneApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DeviceStatusResponse', function() {
      beforeEach(function() {
        instance = new InLaneApi.DeviceStatusResponse();
      });

      it('should create an instance of DeviceStatusResponse', function() {
        // TODO: update the code to test DeviceStatusResponse
        expect(instance).to.be.a(InLaneApi.DeviceStatusResponse);
      });

      it('should have the property deviceStatus (base name: "deviceStatus")', function() {
        // TODO: update the code to test the property deviceStatus
        expect(instance).to.have.property('deviceStatus');
        // expect(instance.deviceStatus).to.be(expectedValueLiteral);
      });

      it('should have the property operationsAvailability (base name: "operationsAvailability")', function() {
        // TODO: update the code to test the property operationsAvailability
        expect(instance).to.have.property('operationsAvailability');
        // expect(instance.operationsAvailability).to.be(expectedValueLiteral);
      });

      it('should have the property resolutionGifURL (base name: "resolutionGifURL")', function() {
        // TODO: update the code to test the property resolutionGifURL
        expect(instance).to.have.property('resolutionGifURL');
        // expect(instance.resolutionGifURL).to.be(expectedValueLiteral);
      });

    });
  });

}));
