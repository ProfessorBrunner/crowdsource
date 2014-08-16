'use strict';

// Configuring the Articles module
angular.module('experiments').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('Experiments', 'Experiments', 'experiments', 'dropdown', '/experiments(/create)?');
		Menus.addSubMenuItem('Experiments', 'experiments', 'List Experiments', 'experiments');
		Menus.addSubMenuItem('Experiments', 'experiments', 'New Experiment', 'experiments/create');
	}
]);