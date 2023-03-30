import fs from "fs"; // This is an IMPORT!

function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                .replace("$TAB_TITLE", config.tabTitle || "Danjie")
                
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
    
    return navbar + page + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default { // This is an EXPORT!
    renderPage,
    readPage,
};