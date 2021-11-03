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

  beforeEach(function() {
    instance = new InLaneApi.PaymentApi();
  });

  describe('(package)', function() {
    describe('PaymentApi', function() {
      describe('apiV1OperationPaymentEndPost', function() {
        it('should call apiV1OperationPaymentEndPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1OperationPaymentEndPost call
          /*
          var opts = {};

          instance.apiV1OperationPaymentEndPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1OperationPaymentStartPost', function() {
        it('should call apiV1OperationPaymentStartPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiV1OperationPaymentStartPost call and complete the assertions
          /*
          var opts = {};

          instance.apiV1OperationPaymentStartPost(body, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.StartOperationResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiV1OperationPaymentStatusGet', function() {
        it('should call apiV1OperationPaymentStatusGet successfully', function(done) {
          // TODO: uncomment apiV1OperationPaymentStatusGet call and complete the assertions
          /*

          instance.apiV1OperationPaymentStatusGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.PaymentOperationStatus);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
