

const express = require('express');
const path = require('path');

const app = express();

app.use (express.static('./public'));

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log('servidor corriendo en el puerto http://localhost:' + port);

});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/crea-tu-cuenta', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/crea-tu-cuenta.html'))
})

app.get('/ingresa', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/ingresa.html'))
})

