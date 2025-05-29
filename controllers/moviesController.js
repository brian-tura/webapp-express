const connection = require('../data/db');

const index = (req, res) => {
    const  moviesSql = "SELECT * FROM movies";

    connection.query(moviesSql, (err, results) => {
        if(err) {
            return res.status(500).json({error: "Database query failed"})
        }
        res.json(results);
    })
}

const show = (req, res) => {
    const id = req.params.id

    const movieSql = `SELECT * FROM movies WHERE id = ${id}`

    connection.query(movieSql, [id], (err, results) =>{
        if(err) {
            return res.status(500).json({error: "Database query failed"})
        }
        res.json(results[0])
    })
}

 module.exports = {
    index,
    show
 }