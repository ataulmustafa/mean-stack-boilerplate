/**
 * Created by Ata on 7/21/2016.
 */
var express = require('express');
module.exports = function() {
    var app = express();
    require('../app/routes/index.server.routes.js')(app);
    return app;
};