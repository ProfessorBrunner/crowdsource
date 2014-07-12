'use strict';

/**
 * @ngdoc function
 * @name crowdsourceDesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crowdsourceDesApp
 */
angular.module('crowdsourceDesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
