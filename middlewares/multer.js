const multer = require('')

const storage = multer.diskStorage({
    destination: './public/imgs/movies',
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalName}`

        cb(null,uniqueName)
    }
})

const upload = multer({storage})

module.exports = upload