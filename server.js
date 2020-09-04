const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

const bodyParser = require('body-parser');
// const api = require('./serever/routs/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get(`/sanity`, function (req, res) {
    console.log(`ok`);
    res.send(console.log(`heheh`))

})
app.get(`/movie/:title`, function (req, res) {
    const mTitle = req.params.title
    urllib.request(`http://www.omdbapi.com/?apikey=a2e2ca53&s=${mTitle}`, function (err, data, respons) {
        if (err) {
            throw err;
        }
        res.send(data)
    })
})

app.get(`/moviePic/:movieId`, function (req, res) {
    const mId= req.params.movieId
    urllib.request(`http://www.omdbapi.com/?apikey=a2e2ca53&i=${mId}`, function (err, data, respons) {
        if (err) {
            throw err;
        }        
        res.send(data)
    })


})


const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`);
})