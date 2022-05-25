export default (services) =>{
    return {
        async getDogs(req, res ){
            const dogs = await services.pets.getDogs();
            res.status(200).json(dogs);
        }
    }
}