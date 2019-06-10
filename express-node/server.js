const express = require('express');
const path = require('path')

var app = express();

app.use(express.static('public'))
// app.get('*', function(res, req) {
    
// })
app.listen(9090, () => {
    console.log(9090)
})