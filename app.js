import express from "express";
const app = express();

import fs from "fs";
import path from "path";

app.use(express.json());
app.use(express.static('public'));

import templateEngine from "./util/templateEngine.js";

app.get('/', (req, res) => {
    const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
    const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(frontpagePage);
});

app.get('/intro', (req, res) => {
    const intro = templateEngine.readPage('./public/pages/infoPages/intro.html');
    const introPage = templateEngine.renderPage(intro, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(introPage);
});

app.get('/first', (req, res) => {
    const first = templateEngine.readPage('./public/pages/infoPages/first.html');
    const firstPage = templateEngine.renderPage(first, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(firstPage);
});

app.get('/second', (req, res) => {
    const second = templateEngine.readPage('./public/pages/infoPages/second.html');
    const secondPage = templateEngine.renderPage(second, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(secondPage);
});

app.get('/third', (req, res) => {
    const third = templateEngine.readPage('./public/pages/infoPages/third.html');
    const thirdPage = templateEngine.renderPage(third, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(thirdPage);
});

app.get('/fourth', (req, res) => {
    const fourth = templateEngine.readPage('./public/pages/infoPages/fourth.html');
    const fourthPage = templateEngine.renderPage(fourth, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(fourthPage);
});

app.get('/fifth', (req, res) => {
    const fifth = templateEngine.readPage('./public/pages/infoPages/fifth.html');
    const fifthPage = templateEngine.renderPage(fifth, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(fifthPage);
});

app.get('/sixth', (req, res) => {
    const sixth = templateEngine.readPage('./public/pages/infoPages/sixth.html');
    const sixthPage = templateEngine.renderPage(sixth, {
    tabTitle : "Rock'n'Roll",
    });
    res.send(sixthPage);
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