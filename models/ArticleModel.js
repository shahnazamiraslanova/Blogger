const mongoose=require('mongoose');
 const ArticleSchema=mongoose.Schema({
    img:String,
    title:String,
    description:String,
    date: {
      type: Date,
      default: Date.now()
  }
 });

 

 module.exports=mongoose.model("articles",ArticleSchema);