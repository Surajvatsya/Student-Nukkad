// config for db
const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/studentNukkadDB", {useNewUrlParser : true, useUnifiedTechnology : true});
mongoose.connect("mongodb://localhost:27017/studentNukkadDB", {useNewUrlParser : true})
.then( () => console. log( "connection successfull"))
.catch((err) => console. log (err));