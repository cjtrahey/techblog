const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize Data Types',
    post_text: 'Examples of commonly used for simple databases are INTEGER and STRING.',
    user_id: 1,
  },
  {
    title: 'Handlebars Template Engine',
    post_text: 'Handlebars is a useful template engine that lets you use templates in your own code, allowing for your work to be more flexible, reusable, and easier to take care of.',
    user_id: 2,
  },
  {
    title: 'Handlebars Partials',
    post_text: 'Partials are another handlebars feature where you can create a partial bit of code for something like post information, or for a comment. You can then use that partial whenever that bit of information is needed for your website.',
    user_id: 2,
  },
  {
    title: 'Sessions',
    post_text: 'When a user logs in, a session can be established using a package such as Express Session. A cookie will be saved on the user computer, authenticating them on the website. Cookies can be set for a limited time or indefinitely.',
    user_id: 3,
  },
  {
    title: 'Hashing',
    post_text: 'Encrypting passwords is of the utmost importance when it comes to security. Hashing takes care of that for you.',
    user_id: 4,
  },
  {
    title: 'Express.js',
    post_text: 'Express.js is an easy way to set up a server with JavaScript. With a few lines of code, you can be on your way to hosting a dynamic webpage.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;