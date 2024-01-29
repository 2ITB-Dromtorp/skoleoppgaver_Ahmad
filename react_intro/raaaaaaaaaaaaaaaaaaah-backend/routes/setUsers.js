const router = require('express').Router();
const Users = require('../models/users');

router.post('/', async (req, res) => {
    const newUser = new Users({
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const user = await newUser.save();
        res.cookie("user", 'p');
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login/:email/:password', async (req, res) => {
    try {
        const user = await Users.find({ email: req.params.email, password: req.params.password });
        if (!user) {
            res.status(404).json('User not found!');
        } else {
            res.cookie("user", "p");
            res.status(200).json({user});
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;





router.post('/', async (req, res) => {
    const newUser = new Users({
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const user = await newUser.save();
        res.cookie("user", 'p');
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json(err);
    }
});









