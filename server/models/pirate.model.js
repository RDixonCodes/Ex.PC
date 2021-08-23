const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String, 
        // unique:[true, "Name already exist"],
        required: [true,"Pirate name is required"],
        minlength: [3, "Pirate name must be at least 3 characters"]
        },

    imageUrl: {
            type: String,
            required: [true, "Pirate URL is required"],
            minlength: [5, "Pirate URL must be at least 5 characters"]
        },

    number: { 
        type: Number,
        required: [true, "Number of treasure chest is required"]
    },

    phrase: {
        type:String,
        required: [true, "Pirate phrase is required"],
        minlength: [5, "Pirate's catch phrase must be at least 5 characters"]
    },

    position: {
        type:String,
        required: [true, "Pirate position is required"]
    },

    pegleg: {
        type:Boolean,
        default: true,
        required: [true, "Please choose at least 2 attributes."]
    },

    eyepatch: {
        type:Boolean,
        default: true,
        required: [true, "Please choose at least 2 attributes."]

    },

    hookhand: {
        type: Boolean,
        default: true,
        required: [true, "Please choose at least 2 attributes."]
    }
    }, { timestamps: true });
module.exports = mongoose.model('Pirates', PirateSchema);