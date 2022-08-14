const db = require('../dbConfig/init');

module.exports = class User {
    constructor (data) {
        this.id = data.id;
        this.username = data.username;
        this.hashPass = data.hashpass;
    }
    
    static find(username) {
        return new Promise (async(resolve, reject) => {
            try {
                const userData = await db.query(`SELECT * FROM users WHERE username = $1;`, [username])
                const user = new User(userData.rows[0])
                resolve(user)
            } catch (e) {
                reject(e);
            }
        })
    }

    static register(username, hash) {
        return new Promise (async (resolve, reject) => {
            try {
                const insert = await db.query(`INSERT INTO users (username, hashpass) VALUES ($1, $2) RETURNING *;`, [username, hash])
                console.log(insert)
                const newUser = new User(insert)
                resolve(newUser)
            } catch (e) {
                reject(e)
            }
        })
    }
}