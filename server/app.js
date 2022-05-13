import 'dotenv/config.js';
const {express} = require ('express');
import axios from 'axios';
const {parser} = require ('body-parser');
const { users } = require ('./endpoints');

const app = express ( );

app.use(parser.urlencoded({extend: false}))
app.use(parser.json())
app.get('/', users.get );

app.post('/', async (req, res) =>{
    const { body } = req
    const {data} = await axios.post('https://dog.ceo/api/breeds/image/random', body);
    res.status(201).send(data);

});

app.put('/:id', async (req, res) =>{
    const { body } = req
    const { id } = req.params
    await axios.put('https://dog.ceo/api/breeds/image/random/${id}', body);

    res.status(204);
});

app.delete('/', async (req,res) => {
    const { body } = req
    const { id } = req.params
    await axios.delete('https://dog.ceo/api/breeds/image/random/${id}');

    res.sendStatus(204);
});


app.listen(3000,( ()=> {
    console.log("Server ok!")
}));
