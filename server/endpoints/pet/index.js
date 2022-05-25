import axios from 'axios';
import dogsModel from '../../models/dogs.model.js';
import catsModel from '../../models/cats.model.js';

const handlers = {
    get:async (req, res) => {
        const dogs = await dogsModel.find({});
        const cats = await catsModel.find({});
        res.status(200).json({dogs, cats});
    },
    post:async (req, res) =>{
        const { body } = req
        const {data} = await axios.post('https://dog.ceo/api/breeds/image/random', body);
        res.status(201).send(data);
    },
    put:async (req, res) =>{
        const { body } = req
        const { id } = req.params
        await axios.put('https://dog.ceo/api/breeds/image/random/${id}', body);
    
        res.status(204);
    },
    delete:async (req,res) => {
        const { body } = req
        const { id } = req.params
        await axios.delete('https://dog.ceo/api/breeds/image/random/${id}');
    
        res.sendStatus(204);
    },
}

export default handlers;