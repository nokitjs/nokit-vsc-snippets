/* global __dirname */
var fs = require("fs");
var path = require("path");
var os = require("os");

function generate(inPath, outFile) {
    var codesPath = path.resolve(__dirname, inPath);
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
    var snippetsPath = path.resolve(__dirname, outFile);
    fs.writeFileSync(snippetsPath, text);
};

//处理 js
generate('../snippets-codes/javascript', '../snippets/javascript.json');
//处理 html
generate('../snippets-codes/html', '../snippets/html.json');