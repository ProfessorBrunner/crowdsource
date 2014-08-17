'use strict';

//Experiments service used to communicate Experiments REST endpoints
angular.module('experiments').factory('Experiments', ['$resource',
	function($resource) {
		return $resource('experiments/:experimentId', { experimentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);