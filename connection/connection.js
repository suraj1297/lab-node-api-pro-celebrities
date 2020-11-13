const mongoose = require("mongoose")

url = "mongodb+srv://admin:root@testing.l4cpi.mongodb.net/celebrity?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(response => console.log("Connected to database successfully"))
    .catch(err => console.log(err))

module.exports = mongoose