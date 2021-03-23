const express = require('express');
const Item = require('../Models/items');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const router = express.Router();


// @Route   GET /
// @desc    Home Route
// @access  Public
router.get('/', (req, res) => {
    res.send('API working');
});

// @Route   GET /items
// @desc    Return items in the database
// @access  Public
router.get('/items', ensureAuthenticated, async (req, res) => {
    try {
        const item = await Item.find().sort();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});

// @Route   GET /item/:id
// @desc    Return one item in the database
// @access  Public

router.get('/item/:id', ensureAuthenticated, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if(!item) {
            return res.status(400).json({msg: 'Item not found'});
        }

        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @Route   POST /additem
// @desc    Add an item to the database
// @access  Public

router.post('/additem', ensureAuthenticated, (req, res) => {
    let item = new Item(req.body);
    item.save()
       .then(item => {
           res.send('Item saved to database');
       })
       .catch(err => {
           res.status(400).send('unable to save item to database!')
       });
});


// @Route   PUT /item/:id
// @desc    Update an item
// @access  Public

router.put('/item/:id', ensureAuthenticated, async (req, res) => {
    try {
        const conditions = { _id: req.params.id };
        
        await Item.updateOne(conditions, req.body)
        .then(doc => {
            if(!doc) {return res.status(404).send();}
            return res.status(200).json(doc);
        })
        .catch(err => next(err));


    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete("/item/:id", ensureAuthenticated, (req, res) => {
    Item
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
        if(!doc) { return res.status(404).send(); }
        return res.status(204).send();
    })
    .catch(err => next(err));
});

module.exports = router;