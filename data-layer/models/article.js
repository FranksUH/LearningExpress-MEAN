import { Schema, model } from 'mongoose';

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

export default model('Article', BlogSchema);