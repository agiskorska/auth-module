const bcrypt = require('bcrypt');

const User = require('../models/User.js');

const index = async (req, res) => {
    try {
        const login = await User.find(req.params.username);
        bcrypt.compare(req.body.password, login.hashPass, function(err, result) {
            if(err){
                console.log(err)
                res.status(400).send({message: "there's been a problem"})
            }
            if(result){
                res.status(200).send(login.username);
            } else {
                res.status(403).send({message: "wrong credentials, M8"})
            }
        });
    } catch (e) {
        res.status(404).send(e);
    }
}

const create = (req, res) => {
    const hash = bcrypt.hash(req.body.password, 10)
            .then(async hash => {
                try {
                    await User.register(req.body.username, hash)
                } catch (e) {
                    console.log(e)
                }
            })
            .catch(err => {
                console.log(err)
            })
    res.status(204).end();
}

const reset = (req, res) => {
    res.status(204).end();
}

module.exports = { index, create, reset}