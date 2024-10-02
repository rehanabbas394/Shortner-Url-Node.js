const mongoose = require("mongoose")


async function Mongodb(url) {
    mongoose.connect(url)
}

module.exports = { Mongodb }