const userArgs = process.argv.slice(2);
/**
 * @file File that creates a document for each genre in the video game 
 * database.
 * @author Chad Chapman
 */
const Console = require("../models/gameconsole");
const consoles = [];
const mongoose = require("mongoose");
const gameconsole = require("../models/gameconsole");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createConsoles();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function consoleCreate(
    name, 
    platform,
    accessories,
    gamesIncluded, 
    description, 
    imageFile,
    condition,
    status,
    price,
    upc) {
    consoleObjDetail = { 
        name: name,
        //platform: platform,
        //accessories: accessories,
        //gamesIncluded: gamesIncluded,
        description: description,
        imageFile: imageFile,
        condition: condition,
        status: status,
        price: price,
        upc: upc,
    };
    if (accessories != false) consoleObjDetail.accessories = accessories;
    if (gamesIncluded != false) consoleObjDetail.gamesIncluded = gamesIncluded;
    if (platform != false) consoleObjDetail.platform = platform;
    const consoleObj = new Console(consoleObjDetail);
    await consoleObj.save();
    consoles.push(consoleObj);
    console.log(`Added Console: ${name}`);
}

async function createConsoles() {
    console.log("Adding console");
    await Promise.all([
        consoleCreate(
            "Xbox Series X", 
            false,
            false,
            false,
            "Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox Series X. At the heart of Series X is the Xbox Velocity Architecture, which pairs a custom SSD with integrated software for faster, streamlined gameplay with significantly reduced load times. Seamlessly move between multiple games in a flash with Quick Resume. Explore rich new worlds and enjoy the action like never before with the unmatched 12 teraflops of raw graphic processing power. Enjoy 4K gaming at up to 120 frames per second, advanced 3D spatial sound, and more.",
            "pc.png",
            "New",
            "Available",
            459.99,
            889842640724)
    ]);
}