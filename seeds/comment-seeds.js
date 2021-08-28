const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Amazing, thanks!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Useful!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "cookies.. yummie",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "brb getting cookies from subway",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "what's that?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "'sometimes i use 'password' as my password. dont tell anyone!'",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;