'use stricts';

const util = require('util');
const mysql = require('mysql');
const db = require('./../../db/database');

module.exports = {
    getUser: (req, res) => {
        let sql = `SELECT Username, Password FROM User WHERE Username = 'user1'`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            console.log("Response");
            console.log(response);
            res.json(response);
        })
    }
}