const express = require('express');

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

// const {getTitle, getApi, getUsuarioInfo, getPassword} = require('./controllers/publicControllers');


app.use('/', require("./routes/publiRoutes"));


app.listen(port, () => {
    console.log('a la escucha del ', port)
})