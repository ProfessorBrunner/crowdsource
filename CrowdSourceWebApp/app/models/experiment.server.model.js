'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Experiment Schema
 */
var ExperimentSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Experiment name',
		trim: true
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	type: {
		type: String,
		default: '',
		trim: true
	},
	labels: {
		type: String,
		default: '',
		trim: true
	},
	images: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Experiment', ExperimentSchema);