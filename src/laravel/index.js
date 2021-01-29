require('dotenv').config();
const replace = require('replace');
const fse = require('fs-extra')
const fields = require("../../config/config.json")
const values = Object.values(fields.table)
const keys = Object.keys(fields.table)

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports.models = function () {
    for (let index = 0; index < keys.length; index++) {
        fse.copy('src/laravel/app/app/Models/Models.php', process.env.APP_PATH + '/app/Models/' + keys[index] + 'Models.php', { overwrite: true }, err => {
            if (err) return console.error(err)
        })
    }
    setTimeout(() => {
        for (let k = 0; k < values.length; k++) {
            replace({
                regex: "FIELDS",
                replacement: JSON.stringify(values[k]),
                paths: [process.env.APP_PATH + '/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });

            replace({
                regex: "TABLE",
                replacement: keys[k],
                paths: [process.env.APP_PATH + '/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });

            replace({
                regex: "PRIMARY_KEY",
                replacement: values[k][0],
                paths: [process.env.APP_PATH + '/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });
        }
    }, 200);
}

module.exports.controller = function () {

    for (let index = 0; index < keys.length; index++) {
        fse.copy('src/laravel/app/app/Http/Controllers/Controllers.php', process.env.APP_PATH + '/app/Http/Controllers/' + jsUcfirst(keys[index]) + 'Controllers.php', { overwrite: true }, err => {
            if (err) return console.error(err)
        })
    }

    setTimeout(() => {
        for (let k = 0; k < values.length; k++) {
            replace({
                regex: "FIELDS",
                replacement: JSON.stringify(values[k]),
                paths: [process.env.APP_PATH + '/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });

            replace({
                regex: "TABLE",
                replacement: keys[k],
                paths: [process.env.APP_PATH + '/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });

            replace({
                regex: "PRIMARY_KEY",
                replacement: values[k][0],
                paths: [process.env.APP_PATH + '/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });
        }
    }, 200);
}

// module.exports.view = function () {

// }