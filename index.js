const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();
const formidableMiddleware = require('express-formidable');
const routes = require("./routes/routes");

const app = express();
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// middleware 
app.use(cors({
  ['http://localhost:3000','https://seedmate.netlify.app','http://localhost:5000','http://localhost:8080','http://localhost:8000']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());
//running routes
app.use('/',routes)

app.listen(process.env.PORT || 3000, () => console.log(`Seed mate running on port ${process.env.PORT || 300}`));
