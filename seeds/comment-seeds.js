const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'So true!',
        user_id: 1,
        post_id: 5
    },
    {
        comment_text: 'Preach!',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Actually, the opposite is true.',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Right on!',
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: 'You are clueless',
        user_id: 5,
        post_id: 1
    },
];

const seedPost = () => Comment.bulkCreate(commentData);

module.exports = seedPost;