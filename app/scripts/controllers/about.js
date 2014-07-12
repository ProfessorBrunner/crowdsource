'use strict';

/**
 * @ngdoc function
 * @name crowdsourceDesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crowdsourceDesApp
 */
angular.module('crowdsourceDesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
