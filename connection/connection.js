const mongoose = require("mongoose")

url = process.env.URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(response => console.log("Connected to database successfully"))
    .catch(err => console.log(err))

module.exports = mongoose
