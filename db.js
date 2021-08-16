var mongoose = require('mongoose');
//Set up default mongoose connection
var uri = 'mongodb+srv://P2dppOAbUfXjf5HM:P2dppOAbUfXjf5HM@cluster0.vdwiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDb = async() => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}
module.exports = connectDb