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
    describe('PaymentStatusEnum', function() {
      beforeEach(function() {
        instance = InLaneApi.PaymentStatusEnum;
      });

      it('should create an instance of PaymentStatusEnum', function() {
        // TODO: update the code to test PaymentStatusEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property depositRunning', function() {
        expect(instance).to.have.property('depositRunning');
        expect(instance.depositRunning).to.be("depositRunning");
      });

      it('should have the property depositJammed', function() {
        expect(instance).to.have.property('depositJammed');
        expect(instance.depositJammed).to.be("depositJammed");
      });

      it('should have the property depositDone', function() {
        expect(instance).to.have.property('depositDone');
        expect(instance.depositDone).to.be("depositDone");
      });

      it('should have the property depositNotesIn', function() {
        expect(instance).to.have.property('depositNotesIn');
        expect(instance.depositNotesIn).to.be("depositNotesIn");
      });

      it('should have the property depositRemoveNotesOut', function() {
        expect(instance).to.have.property('depositRemoveNotesOut');
        expect(instance.depositRemoveNotesOut).to.be("depositRemoveNotesOut");
      });

      it('should have the property dispenseRunning', function() {
        expect(instance).to.have.property('dispenseRunning');
        expect(instance.dispenseRunning).to.be("dispenseRunning");
      });

      it('should have the property dispenseJammed', function() {
        expect(instance).to.have.property('dispenseJammed');
        expect(instance.dispenseJammed).to.be("dispenseJammed");
      });

      it('should have the property dispenseDone', function() {
        expect(instance).to.have.property('dispenseDone');
        expect(instance.dispenseDone).to.be("dispenseDone");
      });

      it('should have the property removeTranche', function() {
        expect(instance).to.have.property('removeTranche');
        expect(instance.removeTranche).to.be("removeTranche");
      });

      it('should have the property notAvailable', function() {
        expect(instance).to.have.property('notAvailable');
        expect(instance.notAvailable).to.be("notAvailable");
      });

      it('should have the property faulted', function() {
        expect(instance).to.have.property('faulted');
        expect(instance.faulted).to.be("faulted");
      });

      it('should have the property unknown', function() {
        expect(instance).to.have.property('unknown');
        expect(instance.unknown).to.be("unknown");
      });

    });
  });

}));
