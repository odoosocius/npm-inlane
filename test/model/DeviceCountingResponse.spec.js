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
    describe('DeviceCountingResponse', function() {
      beforeEach(function() {
        instance = new InLaneApi.DeviceCountingResponse();
      });

      it('should create an instance of DeviceCountingResponse', function() {
        // TODO: update the code to test DeviceCountingResponse
        expect(instance).to.be.a(InLaneApi.DeviceCountingResponse);
      });

      it('should have the property counting (base name: "counting")', function() {
        // TODO: update the code to test the property counting
        expect(instance).to.have.property('counting');
        // expect(instance.counting).to.be(expectedValueLiteral);
      });

      it('should have the property isPartial (base name: "isPartial")', function() {
        // TODO: update the code to test the property isPartial
        expect(instance).to.have.property('isPartial');
        // expect(instance.isPartial).to.be(expectedValueLiteral);
      });

    });
  });

}));
