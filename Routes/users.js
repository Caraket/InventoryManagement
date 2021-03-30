const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../Models/User');


const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => {
    res.send('login');
});

router.get('/register', forwardAuthenticated, (req, res) => {
    res.send('register');
});

router.post('/register', (req, res) => {
    const { firstName, lastName, username, email, password, password2 } = req.body;
    let errors = [];

    if(!firstName || !lastName || !username || !password || !password2) {
        errors.push({msg: 'Please enter all fields!'});
    }

    if( password != password2) {
        errors.push({msg: 'Passwords must match'});
    }

    if(password.length < 6) {
        errors.push({msg: 'Password must contain at least 6 characters'});
    }

    if(errors.length > 0) {
        console.error(errors);
        res.send('Errors > 0');
    } else{
        User.findOne({ email: email}).then(user => {
            if(user) {
                errors.push({msg: 'Email already exists'});
                res.send('register');
            } else{
                const newUser = new User({
                    firstName,
                    lastName,
                    username,
                    password,
                    email                    
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.error(err.message);
                        newUser.password = hash;
                        newUser.save()
                        .then(user => {
                            res.send('New User saved');
                        })
                        .catch(err => {
                            console.error(err.message);
                        })
                    })
                })
            }
        }) 
    }

});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login'
    })(req, res, next);
});


router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;