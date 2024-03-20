const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require('./middleware/error');



// import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobTypeRoutes = require('./routes/jobTypeRoutes');


// db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("DB Connected"))
.catch((err)=> console.log(err));


// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}))
app.use(cookieParser());
app.use(cors());

// route
// app.get('/', (req, res) => {
//     res.send('Hello from Node');
// })
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', jobTypeRoutes)

// error middleware
app.use(errorHandler);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
