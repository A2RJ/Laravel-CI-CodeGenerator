const replace = require('replace');
const fs = require('fs');
const fse = require('fs-extra')

appendString = '';
for (var i = 0; i < fields.fields.length; i++) {
    appendString += "This is number " + fields.fields[i] + "\n";
}

console.log(appendString);

// Append string to file
// var data = fs.readFileSync('text.php').toString().split("\n");
// data.splice(3, 0, "Your String");
// var text = data.join("\n");
// fs.writeFile('text.php', text, function (err) {
//     if (err) return console.log(err);
// });

// 
createModels = () => {

    fse.copy('coba.php', 'coba/coba.php', { overwrite: false }, err => {
        if (err) return console.error(err)
        console.log('success copy!')
        replace({
            regex: "APA",
            replacement: "replacement string",
            paths: ['./coba/coba.php'],
            recursive: true,
            silent: true,
        });
        console.log('success replace!')

        fse.move('coba/coba.php', 'copy/coba.php', { overwrite: false }, err => {
            if (err) return console.error(err)
            console.log('success move!')
        })
    })
}

createControllers = () => {

}

createViews = () => {

}