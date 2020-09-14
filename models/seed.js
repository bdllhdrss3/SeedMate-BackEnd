const mongoose = require('mongoose');

const Seed = new mongoose.Schema({
  name: {
    type: String
  },
  depth: {
    type: String
    
  },
  image: {
    type: String
    
  },
  season: {
    type: String
    
  },
  spacing: {
    type: String
    
  },
  date: {
    type: Date,
  }
  
  
});




const seed = mongoose.model("seeds", Seed);
module.exports = seed;