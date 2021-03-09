const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/index');

const app = express();

app.use(express.json({extended: false}));

const url = 'mongodb://localhost:27017/invenoryManagement';
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}).then(
    () => { console.log('DB connected') },
    err => { console.error( err )}
);


app.use('/', routes);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})