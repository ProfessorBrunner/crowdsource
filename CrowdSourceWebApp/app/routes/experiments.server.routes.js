'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var experiments = require('../../app/controllers/experiments');

	// Experiments Routes
	app.route('/experiments')
		.get(experiments.list)
		.post(users.requiresLogin, experiments.create);

	app.route('/experiments/:experimentId')
		.get(experiments.read)
		.put(users.requiresLogin, experiments.hasAuthorization, experiments.update)
		.delete(users.requiresLogin, experiments.hasAuthorization, experiments.delete);

	// Finish by binding the Experiment middleware
	app.param('experimentId', experiments.experimentByID);
};