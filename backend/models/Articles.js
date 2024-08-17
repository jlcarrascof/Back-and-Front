const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    urlToImage: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Article', articleSchema);
