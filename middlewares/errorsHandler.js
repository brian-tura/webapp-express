function errorsHandler(err, req, res, next) {
    res.status(500);
    res.json({
        error: errorsHandler.message
    })
}

module.exports = errorsHandler