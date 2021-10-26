const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Rules what to display on root
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

//From the Port URL going to directory "/URL" will reutrn text "cool!"
app.get('/URL', (req, res) => {
    res.send('cool!')
})

//Listen on /hello/name
app.get('/hello/:name', (req, res) =>{
    //send response and get data from URL
    res.send('Hello ' +req.params.name+" !")
})

//on /api/movies pass JSON file
app.get('/api/movies', (req, res) => {
    //Create Constant Variable with JSON sting and objects
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];

        res.status(200).json({
            mymovies:movies,
            message:'Data Sent'
        })
})

app.get('/test', (req, res) =>{
    //send file index.html from current directory
    res.sendFile(__dirname+'/index.html')
})

app.get('/name', (req, res) =>{
    //Recive data from query
    res.send('Hello '+req.query.firstname+' '+req.query.lastname+"!")
})

app.post('/name', (req, res) =>{
    //Recive data from body of the POST Method using Body-Parser
    res.send('Hello '+req.body.firstname+' '+req.body.lastname+"!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})