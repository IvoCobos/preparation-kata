import 'dotenv/config.js';
import express from 'express';
import axios from 'axios';
import parser from'body-parser';
import { pets } from './endpoints/index.js';
import mongoose from 'mongoose';
import dogsEndpoint from './endpoints/dogs.endpoint.js';
import petsServices from './services/pets.services.js';
import catsEndpoint from './endpoints/cats.endpoint.js'

const dogs = dogsEndpoint({pets: petsServices()});
const cats = catsEndpoint({pets: petsServices()});

const app = express ( );

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.get('/dogs', dogs.getDogs );
app.get('/cats', cats.getCats);

// app.post('/', pets.post);

// app.put('/:id', pets.put);

// app.delete('/', pets.delete);

const port = 3000;

// DB connection 
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log("Conectado a MongoBD");
    app.listen(port, ( () => {
        console.log("Server Ok", port);
    }))
})
.catch((error) => console.log(error));