//establish a connection to DB here
const db = require("../connection");

module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM categories`, (err, results)=>{
            if (err) return res.sendStatus(500);
            return res.send({ categories: results });
        });
    },
    store(req, res) {
        db.query(`INSERT INTO categories (category_name) VALUES (?)`, [req.body.category.category_name], (err, result)=>{
            console.log("result: " + JSON.stringify(result));
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        });
    }, 
    update(req, res){
        db.query(`UPDATE categories SET category_name=? WHERE category_id=?`, [req.body.category.category_name, req.params.category], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        });
    },
    destroy(req, res){
        db.query(`DELETE FROM categories WHERE category_id=?`, [req.params.category], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        });
    }
};