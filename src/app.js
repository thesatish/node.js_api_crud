const express = require('express');
const app = express();
const conn = require('../src/db/conn');
const StudentData = require('../src/models/student');
const router = require("../src/routers/studentroute");
const port = process.env.PORT || 3000;


// used this to tell the postman about the type of data we are passong
app.use(express.json());
// app.use('/sen', router)
app.use(router);

//Use this in case of without 
//creating stident data
// app.post("/student", async (req, res) => {
//     try{
//         const addingStdData = new StudentData(req.body);
//         console.log(req.body);
//         const newInsert = await addingStdData.save();
//         res.status(201).send(newInsert);

//     }catch(e){
//         res.status(400).send(e);
//     }
// })

//Fetching Data GET Method
// app.get("/student", async (req, res) => {
//     try{
//         const fetchStudent = await StudentData.find({}).sort({roll: 1});
//         console.log(fetchStudent)
//         res.status(200).send(fetchStudent);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

//Fetch Single data based on ID
// app.get("/student/:id", async (req, res) => {
//     try{
//         const _id = req.params.id;
//         const fetchSingle = await StudentData.findById({_id: _id});
//         res.send(fetchSingle);
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

//Updating the Data
// app.put("/student/:id", async (req, res) => {
//     try{
//         const _id = req.params.id;
//         const updateSingle = await StudentData.findByIdAndUpdate(_id, req.body, {new: true});
//         res.send(updateSingle);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })

//Delete Data
// app.delete("/student/:id", async (req, res) => {
//     try{
//         const deleteStudent = await StudentData.findByIdAndDelete(req.params.id);
//         res.send(deleteStudent);
//     }catch(e){
//         res.status(500).send(e);
//     }
// });


app.listen(port, () => {
    console.log(`Post is listening at ${port}`);
})