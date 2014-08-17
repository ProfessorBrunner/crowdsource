'use strict';

// Configuring the Articles module
angular.module('experiments').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Experiments', 'experiments', 'dropdown', '/experiments(/create)?');
		Menus.addSubMenuItem('topbar', 'experiments', 'List Experiments', 'experiments');
		Menus.addSubMenuItem('topbar', 'experiments', 'New Experiment', 'experiments/create');
	}
]);