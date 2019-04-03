const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bookSchema = new Schema({
    titre:  {type:String, required:true},
  author:   {type:String, required:true},
  year:     {type:Number, required:true},
  pages:    {type:Number, required:true, min:1},
  createAt: {type:Date, default:Date.now},
},
{
  versionKey: false
})
bookSchema.pre('save', next => {
  now = new Date();
  if(!this.createAt) {
    this.createAt = now
  }
  next();
})
module.exports = mongoose.model('book', bookSchema);
