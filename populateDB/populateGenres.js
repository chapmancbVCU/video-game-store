const userArgs = process.argv.slice(2);
/**
 * @file File that creates a document for each genre in the video game 
 * database.
 * @author Chad Chapman
 */
const Genre = require("../models/genre");
const genres = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createGenres();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function genreCreate(name) {
    const genre = new Genre({ name: name });
    await genre.save();
    genres.push(genre);
    console.log(`Added genre: ${name}`);
}

async function createGenres() {
    console.log("Adding genres");
    await Promise.all([
      genreCreate("Action"),
      genreCreate("Action-adventure"),
      genreCreate("Adventure"),
      genreCreate("Puzzle"),
      genreCreate("Role-playing"),
      genreCreate("Simulation"),
      genreCreate("Strategy"),
      genreCreate("Sports"),
    ]);
}