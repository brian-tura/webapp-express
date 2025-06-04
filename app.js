const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.SERVER_PORT;

const cors = require('cors')

app.use(cors({ origin: process.env.FE_APP }))

const moviesRouter = require('./routers/movies');

const notFoundHandler = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(express.static('public'));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Movie API server")
});

app.use("/api/movies", moviesRouter);

app.use(errorsHandler);
app.use(notFoundHandler);

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta: ${port}`)
});