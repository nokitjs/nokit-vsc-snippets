/* global __dirname */
var fs = require("fs");
var path = require("path");
var os = require("os");

//处理 js
var codesPath = path.resolve(__dirname, '../codes/js');
var files = fs.readdirSync(codesPath);
var rs = {};
files.forEach(function (file) {
    var text = fs.readFileSync(path.normalize(codesPath + "/" + file)).toString();
    text = text.replace(/\/\*\-/igm, "").replace(/\-\*\//igm, "");
    text = text.replace(/\$\_/igm, "${").replace(/\_\$/igm, "}");
    var textLines = text.split(os.EOL);
    var description = textLines[0];
    textLines = textLines.slice(1);
    var name = "nokit-" + file.split('.')[0];
    rs[name] = {
        "prefix": name,
        "body": textLines,
        "description": description
    };
});
var text = JSON.stringify(rs);
var snippetsPath = path.resolve(__dirname, '../snippets/nokit-js.json');
fs.writeFileSync(snippetsPath, text);

//处理 html