module.exports = (app) => {
    var articleControllers = require('../controllers/articles');

    app.route('/articles')
       .get(articleControllers.getAll)
       .post(articleControllers.create);

    app.route('/articles/:articleId')
       .get(articleControllers.getArticle)
       .put(articleControllers.updateArticle)
       .delete(articleControllers.deleteArticle);
}