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
    instance = new InLaneApi.ResetApi();
  });

  describe('(package)', function() {
    describe('ResetApi', function() {
      describe('apiV1OperationResetStartPost', function() {
        it('should call apiV1OperationResetStartPost successfully', function(done) {
          // TODO: uncomment apiV1OperationResetStartPost call
          /*

          instance.apiV1OperationResetStartPost(function(error, data, response) {
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
      describe('apiV1OperationResetStatusGet', function() {
        it('should call apiV1OperationResetStatusGet successfully', function(done) {
          // TODO: uncomment apiV1OperationResetStatusGet call and complete the assertions
          /*

          instance.apiV1OperationResetStatusGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(InLaneApi.OperationStatus);

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
