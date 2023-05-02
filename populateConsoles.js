const userArgs = process.argv.slice(2);
/**
 * @file File that creates a document for each genre in the video game 
 * database.
 * @author Chad Chapman
 */
const Console = require("./models/gameconsole");
const consoles = [];

const mongoose = require("mongoose");
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

async function consoleCreate(name, manufacturer, description, imageFile) {
    const consoleObj = new Console({ 
        name: name,
        manufacturer: manufacturer,
        description: description,
        imageFile: imageFile,
    });
    await consoleObj.save();
    consoles.push(consoleObj);
    console.log(`Added Console: ${name}`);
}

async function createConsoles() {
    console.log("Adding console");
    await Promise.all([
        consoleCreate("Personal Computer", "PC", "The ultimate customizable gaming platform.  Unlike other consoles, you are not stuck with static hardware.  Operating system options are Windows, MacOS, and Linux.", "pc.png"),
    ]);
}