const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./Routes/index');
const userRoutes = require('./Routes/users');

const app = express();

app.use(express.json({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'ThisisAgrEatSecReT',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));

app.use(passport.initialize());
app.use(passport.session());

const url = 'mongodb://localhost:27017/inventoryManagement';
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).then(
    () => { console.log('DB connected') },
    err => { console.error( err )}
);


app.use('/users', userRoutes);
app.use('/', routes);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})