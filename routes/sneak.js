const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key')
const auth = require('../auth/auth');

const Sequelize = require('../sequelize')
const { Op } = require("sequelize");

//Importing the models
const { User } = require('../sequelize');
const { Sneaker } = require('../sequelize');
const { Cart } = require('../sequelize');



Sequelize.syncDB()


//TEST
router.get('/', (req, res) => {
    res.send('API is working')
})


//GET
router.get('/sneakers', (req, res) => {

    Sneaker.findAll().then(sneakers => {
        res.send(sneakers)
        
    }, (err) => {
        res.status(500).send(err.message)
    })

})

router.post('/sneakersname', (req, res) => {

    console.log(req.body.name)
    
    Sneaker.findAll({

        where: {

            [Op.or]: [
                { name: { [Op.like]: `%${req.body.name}%` } },
                { brand: { [Op.like]: `%${req.body.name}%` } },
                { color: { [Op.like]: `%${req.body.name}%` } },
            ]
        }

    }).then(sneakers => {
        res.send(sneakers)
            
        
    }, (err) => {
        res.status(500).send(err.message)
    })
    
})

router.post('sneakerbyuser', (req, res) => {
    
        Sneaker.findAll({
            where: {
                user_id: req.body.user_id
            }
        }).then(sneakers => {
            res.send(sneakers)
        }, (err) => {
            res.status(500).send(err.message)
        })
    
})

router.post('/cart', (req, res) => {
    
        console.log(req.body)
        Cart.create(req.body).then(cart => {
            res.send(cart)
        }, (err) => {
            res.status(500).send(err.message)
        })
    
})








module.exports = router;