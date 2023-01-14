const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({extended: true}));

//ROUTES
const routes = require('./routes');
routes(app);

//RUN
const port = process.env.PORT;
app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`);
});