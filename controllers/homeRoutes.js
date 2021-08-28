const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// gets all posts, no login req'd
router.get('/', async (req, res) => {
     try {
          const postData = await Post.findAll({
               include: [{ model: User, attributes: ['id', 'username'] }],
          });
          const posts = postData.map((post) => post.get({ plain: true }));
          res.render('homepage', { posts, logged_in: req.session.logged_in, });
     } catch (err) {
          console.log(err);
          res.status(500).json(err);
     }
});

// login route
router.get('/login', (req, res) => {
     if (req.session.logged_in) {
          res.redirect('/');
          return;
     }
     res.render('login');
});

// signup route
router.get('/signup', (req, res) => {
     if (req.session.logged_in) {
          res.redirect('/');
          return;
     }
     res.render('signup');
});

module.exports = router;



