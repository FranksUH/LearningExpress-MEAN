Article = require('../../data-layer/models/article');

exports.getAll = (_, res) => {
    Article.find({}, (err, articles) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).json(articles);
        }
    });
}

exports.create = (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save((err, article) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).json(article);
        }
    });
}

exports.getArticle = (req, res) => {
    Article.findById(req.params.articleid, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).json(article);
        };
    });
}

exports.updateArticle = (req, res) => {
    Article.findOneAndUpdate({ 
        _id: req.params.articleid },
        req.body,
        { new: true },
    (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json(article);
        }    
    });
}

exports.deleteArticle = (req, res) => {
    Article.remove({ _id: req.params.articleid }, 
        (err, article) => {
            if (err) {
                res.status(404).send(err);
            }
            else {                
                res.status(200).json({ message: "Article successfully deleted" });
            }
        });
}