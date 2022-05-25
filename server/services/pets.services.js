import dogsModel from "../models/dogs.model.js"
import catsModel from "../models/cats.model.js"

export default () => {
    return {
        async getDogs(){ 
            const dogs = await dogsModel.find({});
            return dogs;
        },
        async getCats(){
            const cats = await catsModel.find({});
            return cats;
        }
    }
}