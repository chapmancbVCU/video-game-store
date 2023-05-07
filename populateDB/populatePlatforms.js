const userArgs = process.argv.slice(2);
/**
 * @file File that creates a document for each platform in the video game 
 * database.
 * @author Chad Chapman
 */
const Platform = require("../models/platform");
const platforms = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));


async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createPlatforms();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}


async function platformCreate(name, manufacturer) {
    const platform = new Platform({ 
        name: name,
        manufacturer: manufacturer,
    });
    await platform.save();
    platforms.push(platform);
    console.log(`Added genre: ${name}`);
}


async function createPlatforms() {
    console.log("Adding platforms");
    await Promise.all([
      platformCreate("Playstation 5", "Sony"),
      platformCreate("Playstation 4", "Sony"),
      platformCreate("Xbox Series X|S", "Microsoft"),
      platformCreate("Xbox One", "Microsoft"),
      platformCreate("Nintendo Switch", "Nintendo"),
      platformCreate("Steam Deck", "Valve"),
    ]);
}