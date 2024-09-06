const articleDbModel = require('../models/article')
const articleModel = new articleDbModel ();

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req, res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }

    async getAllArticleBySlug(req, res){
        const articles = await articleModel.findOne(req.params.sulg)
        res.status(201).json({article: article})
    }
}

module.exports = articleController