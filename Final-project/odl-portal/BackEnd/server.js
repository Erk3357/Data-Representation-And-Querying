const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

 app.use(cors());
 app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
 res.header("Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept");
 next();
 });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin:admin@cluster0.gybrb.mongodb.net/BookDB?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const bookSchema = new mongoose.Schema({
    Title:String,
    Publisher:String,
    Year:String,
    Cover:String
});

const bookModel = mongoose.model('Eryk', bookSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/books', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Publisher);
    console.log(req.body.Year);
    console.log(req.body.Cover);

    bookModel.create({
        Title:req.body.Title,
        Publisher:req.body.Publisher,
        Year:req.body.Year,
        Cover:req.body.Cover
    })
    .then()
    .catch();
    res.send('Data Sent to Server!')
})

app.get('/api/books/:id',(req, res)=>{
    console.log(req.params.id);

    bookModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/books/:id', (req, res)=>{
    console.log('Deleteing : '+req.params.id);

    bookModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
                res.status(500).send(error)
            res.status(200).send(data);
        })
})

app.put('/api/books/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})



app.get('/api/books', (req, res) => {
    bookModel.find((err, data)=>{
        res.json(data);
    })
          
           // https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg
      
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})