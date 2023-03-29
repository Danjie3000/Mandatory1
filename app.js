import express from "express";
const app = express();

import fs from "fs";
import path from "path";

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

import templateEngine from "./util/templateEngine.js";

// Frontpage.
const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage = templateEngine.renderPage(frontpage, {
tabTitle : "Rock'n'Roll",
});

// intro.
const intro = templateEngine.readPage('./public/pages/infoPages/intro.html');
const introPage = templateEngine.renderPage(intro, {
tabTitle : "Rock'n'Roll",
});

// first.
const first = templateEngine.readPage('./public/pages/infoPages/first.html');
const firstPage = templateEngine.renderPage(first, {
tabTitle : "Rock'n'Roll",
});

// second.
const second = templateEngine.readPage('./public/pages/infoPages/second.html');
const secondPage = templateEngine.renderPage(second, {
tabTitle : "Rock'n'Roll",
});

// third.
const third = templateEngine.readPage('./public/pages/infoPages/third.html');
const thirdPage = templateEngine.renderPage(third, {
tabTitle : "Rock'n'Roll",
});

// fourth.
const fourth = templateEngine.readPage('./public/pages/infoPages/fourth.html');
const fourthPage = templateEngine.renderPage(fourth, {
tabTitle : "Rock'n'Roll",
});

// fifth.
const fifth = templateEngine.readPage('./public/pages/infoPages/fifth.html');
const fifthPage = templateEngine.renderPage(fifth, {
tabTitle : "Rock'n'Roll",
});

// sixth.
const sixth = templateEngine.readPage('./public/pages/infoPages/sixth.html');
const sixthPage = templateEngine.renderPage(sixth, {
tabTitle : "Rock'n'Roll",
});

// contact.
const contact = templateEngine.readPage('./public/pages/infoPages/contact.html');
const contactPage = templateEngine.renderPage(contact, {
tabTitle : "Rock'n'Roll",
});

// login.
const login = templateEngine.readPage('./public/pages/login/login.html');
const loginPage = templateEngine.renderPage(login, {
tabTitle : "Rock'n'Roll",
});

app.get('/', (req, res) => {
    res.send(frontpagePage);
});

app.get('/intro', (req, res) => {
    res.send(introPage);
});

app.get('/first', (req, res) => {
    res.send(firstPage);
});

app.get('/second', (req, res) => {
    res.send(secondPage);
});

app.get('/third', (req, res) => {
    res.send(thirdPage);
});

app.get('/fourth', (req, res) => {
    res.send(fourthPage);
});

app.get('/fifth', (req, res) => {
    res.send(fifthPage);
});

app.get('/sixth', (req, res) => {
    res.send(sixthPage);
}); 

app.get('/contact', (req, res) => {
    res.send(contactPage);
}); 

app.get('/login', (req, res) => {
    res.send(loginPage);
});

// API

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.post("/api/login", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

// API

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("error: ", error);
        return;
    }
    console.log("Server is running on port: ", PORT);
});