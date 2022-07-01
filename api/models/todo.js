'use strict';
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let todoSchema =new Schema({
    item: {
        type: String,
        required: "Task is required"
    },

    createdDate: {
        type: Date,
        default: Date.now
    },

    updatedDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: Boolean,
        default: false
    },


}, {
    versionKey: false
});

todoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

todoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todoScm', todoSchema);

