const mongoose = require('mongoose');
// const db_name = "pirates";

module.exports = (db_name) => {
    mongoose.connect("mongodb://localhost/pirates", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log("Rrrready to make pirates!"))
    .catch(err => console.log("Mmm. Nope. Try agian.", err));
}
