const connection = require('../data/db');

const index = (req, res) => {
    const moviesSql = "SELECT * FROM movies";

    connection.query(moviesSql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" })
        }
        res.json(results);
    })
}

const show = (req, res) => {
    const id = req.params.id

    const movieSql = `SELECT * FROM movies WHERE id = ?`

    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`

    connection.query(movieSql, [id], (err, movieResult) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" })
        }

        if (movieResult.length === 0 || movieResult[0].id === null) {
            return res.status(404).json({ error: 'Not Found' })
        }

        const movie = movieResult[0];

        connection.query(reviewsSql, [id], (err, reviewsResult) => {
            if (err) {
                return res.status(500).json({ error: "Database query failed" })
            }

            movie.reviews = reviewsResult;

            res.json(movie);
        })
    })
}

const store = (req, res, next) => {

    const { movie_id, name, vote, text } = req.body;

    const sqlReview = `INSERT INTO reviews (movie_id,name,vote,text) VALUES (?, ?, ?, ?)`;

    connection.query(sqlReview, [movie_id, name, vote, text], (err) => {
        if (err) {
            console.log(err)
            return next("Error in adding review")
        };

        res.status(201).json({
            status: 'success',
            message: 'review added'
        })

    });
}

module.exports = {
    index,
    show,
    store
}