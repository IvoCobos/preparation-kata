export default (services)=> {
    return {
        async getCats(req, res){
            const cats = await services.pets.getCats();
            res.status(200).json(cats);
        }
    }
}