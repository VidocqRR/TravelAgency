let express = require('express')
let app = express()
let path = require('path')


app.use(express.static('video'))
app.get('/home' ,(req,res) => {
    res.sendFile(__dirname + '/views/HomePage.html')
})

app.get('/login',(req,res) => {
    res.sendFile(__dirname + '/views/firstPage.html')
})

app.listen(2000,() => {
    console.log('The port run 2000')
})