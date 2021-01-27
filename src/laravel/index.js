const replace = require('replace');
const fse = require('fs-extra')
const fields = require("../../config/config.json")
const values = Object.values(fields.table)
const keys = Object.keys(fields.table)

module.exports.models = function () {
    let j = 0
    for (const key of keys) {
        fse.copy('src/laravel/app/app/Models/Models.php', 'app_laravel/app/Models/' + keys[j] + 'Models.php', { overwrite: true }, err => {
            if (err) return console.error(err)
        })
        j++
    }
    setTimeout(() => {
        for (let k = 0; k < values.length; k++) {
            appendString = '';
            appendString += "" + values[k] + ",";

            replace({
                regex: "FIELDS",
                replacement: appendString,
                paths: ['app_laravel/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });

            replace({
                regex: "TABLE",
                replacement: keys[k],
                paths: ['app_laravel/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });

            replace({
                regex: "PRIMARY_KEY",
                replacement: values[k][0],
                paths: ['app_laravel/app/Models/' + keys[k] + 'Models.php'],
                recursive: true,
                silent: true,
            });
        }
    }, 200);
}

module.exports.controller = function () {
    
}

module.exports.view = function () {
    
}