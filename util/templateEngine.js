import fs from "fs";

// Components
function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                .replace("$TAB_TITLE", config.tabTitle || "Danjie") // If tabTitle is undefined, use "Danjie" as default. Efter || vil der være Danjie som defualt.
                
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
    
    return navbar + page + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage,
};