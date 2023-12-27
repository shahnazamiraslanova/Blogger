const Articles = require("../models/ArticleModel")

const postController = async(req, res) => {
    const article = new Articles({
        img: req.body.img,
        title: req.body.title,
        description: req.body.description
    })
    await article.save()
    res.send(article)
        
}
module.exports=postController

