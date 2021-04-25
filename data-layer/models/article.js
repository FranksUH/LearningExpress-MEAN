const Mongose = require('mongoose');
const Schema = Mongose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongose.model('Article', BlogSchema);