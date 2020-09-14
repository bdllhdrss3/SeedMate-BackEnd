let Seed = require("../../models/seed")

module.exports.addSeed = add;

function add(req,res){
        try{ 
              let seed = new Seed({
              name: req.fields.name,
              depth: req.fields.depth,
              image: req.fields.image,
              season: req.field.season,
              date: new Date()
              });
              
              result = seed.save();
            
              res.send(result);
          }catch(e){
            console.log("error occured");
            res.send("eror");
          }
    }

 