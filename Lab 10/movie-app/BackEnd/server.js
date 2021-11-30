const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

//Help navigate to Build Folder
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')))

/*app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

//conenction link
const strConnection = 'mongodb+srv://admin:admin@cluster0.gybrb.mongodb.net/MovieDB?retryWrites=true&w=majority'

main().catch(err => console.log(err));

//connect to DB access link defined in strConnection
async function main() {
  await mongoose.connect(strConnection);
}

const movieSchema = new mongoose.Schema({
    Title:String,
    Year:String,
    Poster:String
});

const movieModel = mongoose.model('eryk', movieSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Get Movie Data and pass it to the server
app.post('/api/movies', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    movieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    });
    res.send('Data Sent to Server!')
})

//Find the movie by it unique ID
app.get('/api/movies/:id',(req, res)=>{
    console.log(req.params.id);

    movieModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

//using axios DeleteOne filter DataBase by ID and if it maches the one defined deletes it
app.delete("/api/movies/:id", (req, res)=>{
    console.log("deleting: "+req.params.id);

    movieModel.deleteOne({_id:req.params.id},(error, data)=>{
        if(error)
            res.send(error);
        res.send(data);
    })
})

//Filters ID and after match is made sends update to the server
app.put('/api/movies/:id',(req, res)=>{
    console.log("Updating: "+ req.params.id);

    movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (error,data)=>{
            res.json(data);
    })
})

app.get('/api/movies', (req, res) => {
    movieModel.find((err, data)=>{
        res.json(data);
    })
          
           // https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg
      
})


//If navigation Build is not defined, Move here
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });
    

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})