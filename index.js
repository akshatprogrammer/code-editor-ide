// Library Imports
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser")

// Project Imports
const routes = require("./routes")

const PORT = process.env.PORT || 5000;
const app = express()

app.use(bodyParser.json())

if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/public'));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve('client', 'public', 'index.html'))
    })
}
app.use('/', routes) 

app.listen(PORT, ()=>{
console.log(`V1 : Server started at port ${PORT}`)
    echo "V1"
})
