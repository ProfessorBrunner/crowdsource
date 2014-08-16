'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Experiment = mongoose.model('Experiment'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Experiment already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Experiment
 */
exports.create = function(req, res) {
	var experiment = new Experiment(req.body);
	experiment.user = req.user;

	experiment.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
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
			return res.send(400, {
				message: getErrorMessage(err)
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
			return res.send(400, {
				message: getErrorMessage(err)
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
			return res.send(400, {
				message: getErrorMessage(err)
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
		return res.send(403, 'User is not authorized');
	}
	next();
};