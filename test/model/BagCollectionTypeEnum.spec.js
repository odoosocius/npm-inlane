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
    describe('BagCollectionTypeEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.BagCollectionTypeEnum;
      });

      it('should create an instance of BagCollectionTypeEnum', function() {
        // TODO: update the code to test BagCollectionTypeEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property all', function() {
        expect(instance).to.have.property('all');
        expect(instance.all).to.be("all");
      });

      it('should have the property banknote', function() {
        expect(instance).to.have.property('banknote');
        expect(instance.banknote).to.be("banknote");
      });

      it('should have the property coin', function() {
        expect(instance).to.have.property('coin');
        expect(instance.coin).to.be("coin");
      });

    });
  });

}));
