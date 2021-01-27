require('dotenv').config();
const Laravel = require('./src/laravel/index.js')

new Laravel.models(); 
new Laravel.controller(); 

console.log(process.env.APP_PATH);