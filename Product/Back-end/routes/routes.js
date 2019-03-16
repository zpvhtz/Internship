'use stricts';

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

module.exports = function(app) {
    let productModel = require('./models/ProductModel');
    let userModel = require('./models/UserModel');

    app.route('/products').get(productModel.get);
    app.route('/products/pages').get(productModel.getPages);
    app.route('/product/:id').get(productModel.detail);
    
    app.route('/login').get((req, res) => res.render('login'))
                   .post(passport.authenticate('local', {failureRedirect: '/login'}));

    passport.use(new localStrategy(
        (username, password, done) => {
            let db = app.get(userModel.getUser);
            setTimeout(function(){
                console.log(db);
            }, 1000);
        }
    ));
}