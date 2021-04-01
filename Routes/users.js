const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const User = require('../Models/User');


const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth');

// Dashboard Page
router.get('/dashboard', (req, res) => {
    res.status(200).send('Dashboard!');
});


// Login Page
router.get('/login', forwardAuthenticated, (req, res) => {
    res.status(200).send('login');
});

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => {
    res.status(200).send('register');
});

// Register Post
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
        res.status(500).send('Errors > 0');
    } else{
        User.findOne({ email: email}).then(user => {
            if(user) {
                errors.push({msg: 'Email already exists'});
                res.status(302).send('register');
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
                            res.status(201).send('New User saved');
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

// Login POST route
// router.post('/login', 
// passport.authenticate('local', 
// {    successRedirect: '/users/dashboard',
//      failureRedirect: '/users/login',
//     }),
// );

router.post('/login', passport.authenticate('local'), (req, res, next) => {
   if( !req.user ) return;
   const date = new Date();
   console.log(`User ID: ${req.user._id} logged in at ${date}`);
   res.json(req.user);
   next();
});



// Get User route
router.get('/user', (req, res) => {
    res.send(req.user);
    console.log(req.user);
});

router.get('/users', (req, res, next) => {
    User.find({}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});



// Logout Post route
router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).redirect('/users/login');
});

module.exports = router;