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
		required: 'Please fill Experiment Name',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill Experiment Description',
		trim: true
	},
	image: {
		data: Buffer, 
		contentType: String
	},
	problems: [{
		category: { type: String, trim: true },
		labels: []
	}],
	type: {
		type: String,
		enum: ['Audio','Image','Video'],
		default: 'Image',
		required: 'Please fill Experiment Type',
		trim: true
	},
	dataset: {
		type: String,
		default: '',
		required: 'Please fill the Dataset Location',
		trim: true

	},
	updated: {
		type: Date,
		default: Date.now
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