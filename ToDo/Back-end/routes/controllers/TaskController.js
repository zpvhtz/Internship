'use stricts';

const util = require('util');
const mysql = require('mysql');
const db = require('./../../db/index');

module.exports = {
    get: (req, res) => {
        let limit = req.query.limit == undefined ? 10 : req.query.limit;
        let page = req.query.page == undefined ? 0 : req.query.page - 1;
        let sql = `SELECT * FROM Task LIMIT ${limit} OFFSET ${limit * page}`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM Task WHERE Id = ?"
        db.query(sql, [req.params.Id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    add: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO Task SET ?"
        db.query(sql, [data], (err, response) => {
            if(err) throw err;
            res.json({message: "Insert successfully"});
        })
    },
    edit: (req, res) => {
        let data = req.body;
        let id = req.params.Id;
        let sql = "UPDATE Task SET ? WHERE Id = ?"
        db.query(sql, [data, id], (err, response) => {
            if(err) throw err;
            res.json({message: "Updated successfully!"});
        })
    },
    delete: (req, res) => {
        let sql = "UPDATE Task SET Status = 0 WHERE Id = ?"
        db.query(sql, [req.params.Id], (err, response) => {
            if(err) throw err;
            res.json({message: "Deleted successfully!"})
        })
    },
    getPages: (req, res) => {
        let limit = req.query.limit == undefined ? 10 : req.query.limit;
        let sql = "SELECT COUNT(*) AS count FROM Task";
        db.query(sql, (err, response) => {
            if(err) throw err;

            let count = JSON.parse(JSON.stringify(response))[0].count;
            let json = count % limit === 0 ? `{ "pages" : ${count / limit} }` : `{ "pages" : ${Math.floor(count / limit) + 1} }`;
            res.json(JSON.parse(json));
        })
    }
}