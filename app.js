const express = require('express');
const app = express();
const moviesRouter = require('./routers/movies')
const dotenv = require('dotenv')
const notFound = require('./middlewares/notFound')
const errorsHandler = require('./middlewares/errorsHandler')

dotenv.config();
const port = process.env.SERVER_PORT;

app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO")
});

app.use("/movies", moviesRouter)

app.use(notFound)

app.use(errorsHandler)

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});