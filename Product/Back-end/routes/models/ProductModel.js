'use stricts';

const util = require('util');
const mysql = require('mysql');
const db = require('./../../db/database');

module.exports = {
    get: (req, res) => {
        let page = req.query.page === undefined ? 0 : req.query.page - 1;
        let limit = req.query.limit === undefined ? 10 : req.query.limit;
        let sql = `SELECT * FROM Product LIMIT ${limit} OFFSET ${limit * page}`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM Product WHERE Id = ?";
        db.query(sql, [req.params.id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    getPages: (req, res) => {
        let limit = req.query.limit === undefined ? 10 : req.query.limit;
        let sql = "SELECT COUNT(*) AS count FROM Product";
        db.query(sql, (err, response) => {
            if(err) throw err;
            
            let count = JSON.parse(JSON.stringify(response))[0].count;
            let json = count % limit === 0 ? `{ "pages" : ${count / limit} }` : `{ "pages" : ${Math.floor(count / limit) + 1 } }`
            res.json(JSON.parse(json));
        })
    }
}