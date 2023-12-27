const Articles = require("../models/ArticleModel")


const getController = async (req, res) => {
    
        const data = await Articles.find()
        res.send(data)
   
    

}

module.exports = getController