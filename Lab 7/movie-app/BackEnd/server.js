const express = require('express')
const app = express()
//Define what port to listen on LocalHost
const port = 4000
//body parser
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// allows to make request from outside domain
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//mongoose
const strConnection = 'mongodb+srv://admin:admin@cluster0.gybrb.mongodb.net/movies?retryWrites=true&w=majority'

//Console log Errors if any
main().catch(err => console.log(err));

//connects to database
async function main() {
  await mongoose.connect(strConnection);
}

const movieSchema = new mongoose.Schema({
    Title:String,
    Year:String,
    Poster:String
});

const movieModel = mongoose.model('movie', movieSchema);


// listening for get method request
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})


//pass movie data to the console
app.post('/api/movies', (req, res) => {
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
    
    //create new movie
    movieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    });

    //confirmation console message
    res.send('Data Sent to Server');
})

//displays movie info at the url + id
app.get('/api/movies/:id',(req, res) => {
    console.log(req.params.id);

    movieModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

// displays movie array at /api/movies URL
app.get('/api/movies', (req, res) => {
  
    movieModel.find((err, data)=>{
        res.json(data);
    })
// "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})