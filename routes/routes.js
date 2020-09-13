
const express = require('express');
const router = express.Router();
const Seed = require("../models/seed")


//controllers
const addSeed = require("./controllers/addSeed").addSeed

//Routes
router.post("/addUser", addSeed);

router.get('/', async(req, res) => {
    let seeds = await Seed.find({})
    try{
      res.send(seeds);
    }
    catch{
      res.send('error occured');
    }
    
});


module.exports = router;