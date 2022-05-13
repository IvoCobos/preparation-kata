const axios = require ('axios');

const handlers = {
    get:async (req, res) => {
        const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
        res.status(200).send(data)
    },
    post: () => {

    },
    put: () => {

    },
    delete: () => {

    },
}

module.exports = handlers