function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    })
    next()
}

module.exports = notFound;