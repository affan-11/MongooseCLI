require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { addMovie, listMovie, deleteMovie, updateMovie } = require("./movie/functions");
const Movie = require("./movie/model");


const app = async (yargsObj) => {
    if (yargsObj.add) {
        //add movie to database from yargs input
        await addMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.update) {
        await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle})
        //update a movie
    } else if (yargsObj.delete) {
        await deleteMovie({title: yargsObj.title});
        //delete a movie 
    } else if (yargsObj.list) {
        await listMovie();
        //list all movies
    } else {
        console.log("Incorrect command")
    }
    await mongoose.disconnect();
}







app(yargs.argv);