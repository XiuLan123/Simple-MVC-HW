const mongoose = require('mongoose');

let DogModel = {};
const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    breed: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

DogSchema.statics.findByName = (name, increasedAge, callback) => {
    const search = {
        name,
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;