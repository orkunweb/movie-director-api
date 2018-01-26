const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
   name: {
       type: String,
       maxlenght: 60,
       minlenght: 2
   },
   surname:  {
    type: String,
    maxlenght: 60,
    minlenght: 2
},
   bio:  {
    type: String,
    maxlenght: 1000,
    minlenght: 2
},
   createdAt : {
       type : Date,
       default : Date.now
   }
});

module.exports = mongoose.model('director', DirectorSchema);