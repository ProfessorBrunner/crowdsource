'use strict';

// Experiments controller
angular.module('experiments').controller('ExperimentsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Experiments',
	function($scope, $stateParams, $location, Authentication, Experiments ) {
		$scope.authentication = Authentication;

		// Create new Experiment
		$scope.create = function() {
			// Create new Experiment object
			var experiment = new Experiments ({
				name: this.name
			});

			// Redirect after save
			experiment.$save(function(response) {
				$location.path('experiments/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Experiment
		$scope.remove = function( experiment ) {
			if ( experiment ) { experiment.$remove();

				for (var i in $scope.experiments ) {
					if ($scope.experiments [i] === experiment ) {
						$scope.experiments.splice(i, 1);
					}
				}
			} else {
				$scope.experiment.$remove(function() {
					$location.path('experiments');
				});
			}
		};

		// Update existing Experiment
		$scope.update = function() {
			var experiment = $scope.experiment ;

			experiment.$update(function() {
				$location.path('experiments/' + experiment._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Experiments
		$scope.find = function() {
			$scope.experiments = Experiments.query();
		};

		// Find existing Experiment
		$scope.findOne = function() {
			$scope.experiment = Experiments.get({ 
				experimentId: $stateParams.experimentId
			});
		};
	}
]);