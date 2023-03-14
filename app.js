const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
console.log(app);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/frontpage/frontpage.html');
});

app.get('/first', (req, res) => {
    res.sendFile(__dirname + '/public/pages/infoPages/first.html')
});

app.get('/second', (req, res) => {
    res.sendFile(__dirname + '/public/pages/infoPages/second.html')
});

app.get('/third', (req, res) => {
    res.sendFile(__dirname + '/public/pages/infoPages/third.html')
});

app.get('/fourth', (req, res) => {
    res.sendFile(__dirname + '/public/pages/infoPages/fourth.html')
});

app.get('/fifth', (req, res) => {
    res.sendFile(__dirname + '/public/pages/infoPages/fifth.html')
});

app.get('/sixth', (req, res) => {
    res.sendFile(__dirname + '/public/pages/infoPages/sixth.html')
});

// API


// API

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("error: ", error);
        return;
    }
    console.log("Server is running on port: ", PORT);
});