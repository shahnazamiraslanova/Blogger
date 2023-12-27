const Articles = require("../models/ArticleModel")


const deleteController = async (req, res) => {
    const id=req.params.id

   const deletE= await Articles.findByIdAndDelete(id) 
   res.send(deletE) 

}

module.exports = deleteController