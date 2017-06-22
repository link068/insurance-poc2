'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('confirmPass',function() {
    	return {
  		restrict:'A',
  		require: '?ngModel',
  		link: function(scope, elem, attrs, ngModel) {
  			ngModel.$validators.myPwdInvalid = function(modelValue, viewValue) {
  				return viewValue === scope.$eval(attrs.confirmPass);
  	      };
  		}	
    };
});