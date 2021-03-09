const express = require('express');
const routes = require('./Routes/index');

const app = express();

app.use(express.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/inventorymanagement";

MongoClient.connect(url, 
    {useNewUrlParser: true,
     useUnifiedTopology: true
    },(err,db) => {
    if(err) throw err;
    console.log('Database connected');
    db.close();
});

app.use('/', routes);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})