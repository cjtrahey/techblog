const withAuth = (req, res, next) => {
    // redirects to login route if user is not logged in
    if (!req.session.logged_in) {
         res.redirect('/login');
    } else {
         next();
    }
};

module.exports = withAuth;