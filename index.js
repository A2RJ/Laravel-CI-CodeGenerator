require('dotenv').config();

const Laravel = require('./src/laravel/index.js')
new Laravel.models();

function Index() {
    new Laravel.replace();
    console.log("was created");
}

setTimeout(Index, 200);  
