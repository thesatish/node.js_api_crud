const express = require('express');
const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    college: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    }
});


// creating documents using schema
const StudnetData = new mongoose.model("StudentData",studentSchema);
module.exports = StudnetData;