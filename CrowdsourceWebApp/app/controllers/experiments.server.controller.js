'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Experiment = mongoose.model('Experiment'),
	_ = require('lodash');

/**
 * Create a Experiment
 */
exports.create = function(req, res) {
	var experiment = new Experiment(req.body);
	experiment.user = req.user;

	experiment.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(experiment);
		}
	});
};

/**
 * Show the current Experiment
 */
exports.read = function(req, res) {
	res.jsonp(req.experiment);
};

/**
 * Update a Experiment
 */
exports.update = function(req, res) {
	var experiment = req.experiment ;

	experiment = _.extend(experiment , req.body);

	experiment.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(experiment);
		}
	});
};

/**
 * Delete an Experiment
 */
exports.delete = function(req, res) {
	var experiment = req.experiment ;

	experiment.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(experiment);
		}
	});
};

/**
 * List of Experiments
 */
exports.list = function(req, res) { Experiment.find().sort('-created').populate('user', 'displayName').exec(function(err, experiments) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(experiments);
		}
	});
};

/**
 * Experiment middleware
 */
exports.experimentByID = function(req, res, next, id) { Experiment.findById(id).populate('user', 'displayName').exec(function(err, experiment) {
		if (err) return next(err);
		if (! experiment) return next(new Error('Failed to load Experiment ' + id));
		req.experiment = experiment ;
		next();
	});
};

/**
 * Experiment authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.experiment.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};