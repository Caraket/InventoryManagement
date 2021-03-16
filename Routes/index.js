const express = require('express');
const Item = require('../Models/items');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API working');
});

router.get('/items', async (req, res) => {
    try {
        const item = await Item.find().sort();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
})

router.post('/additem', (req, res) => {
    let item = new Item(req.body);
    item.save()
       .then(item => {
           res.send('Item saved to database');
       })
       .catch(err => {
           res.status(400).send('unable to save item to database!')
       });
})

module.exports = router;