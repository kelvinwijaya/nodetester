"use strict" 

const helper = require('api-test-helper').apiHelper;

let params = require('./data.json');

Promise.resolve()
    .then(function() { return helper.performTest(params) })

    .then(helper.displayTestResult).then(message => console.log("\n" + message))
    .catch(function(error) { 
        console.log(error);
    })
    ;
