'use strict';

//Setting up route
angular.module('experiments').config(['$stateProvider',
	function($stateProvider) {
		// Experiments state routing
		$stateProvider.
		state('listExperiments', {
			url: '/experiments',
			templateUrl: 'modules/experiments/views/list-experiments.client.view.html'
		}).
		state('createExperiment', {
			url: '/experiments/create',
			templateUrl: 'modules/experiments/views/create-experiment.client.view.html'
		}).
		state('viewExperiment', {
			url: '/experiments/:experimentId',
			templateUrl: 'modules/experiments/views/view-experiment.client.view.html'
		}).
		state('editExperiment', {
			url: '/experiments/:experimentId/edit',
			templateUrl: 'modules/experiments/views/edit-experiment.client.view.html'
		});
	}
]);