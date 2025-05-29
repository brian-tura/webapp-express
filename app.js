const express = require('express');
const app = express();
const port = 3000;
const moviesRouter = require('./routers/movies')

app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO")
});

app.use("/movies", moviesRouter)

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});