const Pirate = require('../models/pirate.model');

module.exports.createPirate = (req, res) => {
    const { name, imageUrl, number, phrase, 
        position, pegleg, eyepatch, hookhand } = req.body;
    Pirate.create({name, imageUrl, number, phrase, 
        position, pegleg, eyepatch, hookhand})
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err));
};

module.exports.getAllPirates = (req, res) => {
    Pirate.find({})
    // .sort({name:"ascending"}) Will sort in alphabetical order. not upper/lower case sensitive
    .then(pirates => res.json(pirates))
    .catch(err => res.json(err));
};

module.exports.getPirate = (req, res) => {
	Pirate.findOne({ _id: req.params.id })
		.then(pirate => res.json(pirate))
		.catch(err => res.json(err));
};

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
    .then(updatedPirate => res.json(updatedPirate))
    .catch(err => res.status(400).json(err));
};

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
};