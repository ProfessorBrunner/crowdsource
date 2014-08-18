'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


/**
 * A Validation function for local strategy password
 */
var validateProperty = function(property) {
	return (property.length);
};

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
	// image: {
	// 	data: Buffer, 
	// 	contentType: String
	// },
	image: {
		type: String, 
		default: '',
		required: 'Please fill Experiment Image Location',
		trim: true
	},
	problems: [{
		category: { type: String, trim: true, validate: [validateProperty, 'Please fill problem category'] },
		labels: []
	}],
	type: {
		type: String,
		enum: ['Audio','Image','Video'],
		default: '',
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