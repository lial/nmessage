/**
 * Created by LIAL on 09.07.15.
 */
var nconf = require('nconf');
var path = require('path');

//Move message.json file into desired directory and set the correct path
nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'messages.json')});

module.exports = nconf;
