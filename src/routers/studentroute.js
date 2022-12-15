const express = require("express");
const router = new express.Router();
const StudentData = require('../models/student');


//creating stident data
router.post("/student", async (req, res) => {
    try{
        const addingStdData = new StudentData(req.body);
        console.log(req.body);
        const newInsert = await addingStdData.save();
        res.status(201).send(newInsert);

    }catch(e){
        res.status(400).send(e);
    }
})


//Fetching Data GET Method
router.get("/student", async (req, res) => {
    try{
        const fetchStudent = await StudentData.find({}).sort({roll: 1});
        console.log(fetchStudent)
        res.status(200).send(fetchStudent);
    }catch(e){
        res.status(400).send(e);
    }
})



//Fetch Single data based on ID
router.get("/student/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const fetchSingle = await StudentData.findById({_id: _id});
        res.send(fetchSingle);
    }catch(e){
        res.status(400).send(e);
    }
})



//Updating the Data
router.put("/student/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updateSingle = await StudentData.findByIdAndUpdate(_id, req.body, {new: true});
        res.send(updateSingle);
    }catch(e){
        res.status(500).send(e);
    }
})


//Delete Data
router.delete("/student/:id", async (req, res) => {
    try{
        const deleteStudent = await StudentData.findByIdAndDelete(req.params.id);
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
});


module.exports = router;