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
    describe('CassetteCollectionStatusEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.CassetteCollectionStatusEnum;
      });

      it('should create an instance of CassetteCollectionStatusEnum', function() {
        // TODO: update the code to test CassetteCollectionStatusEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property none', function() {
        expect(instance).to.have.property('none');
        expect(instance.none).to.be("none");
      });

      it('should have the property waitingCoverOpen', function() {
        expect(instance).to.have.property('waitingCoverOpen');
        expect(instance.waitingCoverOpen).to.be("waitingCoverOpen");
      });

      it('should have the property waitingCassetteRemoval', function() {
        expect(instance).to.have.property('waitingCassetteRemoval');
        expect(instance.waitingCassetteRemoval).to.be("waitingCassetteRemoval");
      });

      it('should have the property askCassetteHookRelease', function() {
        expect(instance).to.have.property('askCassetteHookRelease');
        expect(instance.askCassetteHookRelease).to.be("askCassetteHookRelease");
      });

      it('should have the property insertCassetteAndCloseCover', function() {
        expect(instance).to.have.property('insertCassetteAndCloseCover');
        expect(instance.insertCassetteAndCloseCover).to.be("insertCassetteAndCloseCover");
      });

      it('should have the property completed', function() {
        expect(instance).to.have.property('completed');
        expect(instance.completed).to.be("completed");
      });

      it('should have the property faulted', function() {
        expect(instance).to.have.property('faulted');
        expect(instance.faulted).to.be("faulted");
      });

    });
  });

}));
