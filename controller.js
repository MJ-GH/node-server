const helpers = require("./helpers")

module.exports = function(req, res) {

    const endpoint = new URL(req.url, "http://localhost:3003").pathname;

    const regEx = /^\/((css|img|js)\/)?\w+\.(html|css|png|jpe?g|js|gif|tiff|svg|bmp)$/;
    let result = endpoint.match(regEx);

    if (result) {
        helpers.sendFile(req, res, "./static/" + result[0]);
        return;
    }

    console.log(result);

    // if(endpoint === "/index.html") {
    //     helpers.sendFile(req, res, "./static/index.html");
    //     return;
    // }

    // console.log(endpoint);
    helpers.send(req, res, { message: `Ressource '${endpoint}' not available` }, 404);
}