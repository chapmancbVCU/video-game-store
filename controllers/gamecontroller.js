/**
 * @file Controller file for game.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const Game = require("../models/game");
const Accessories = require("../models/accessories");
const GameConsole = require("../models/gameconsole");
const Genre = require("../models/genre");
const Platform = require("../models/platform");
const { body, validationResult } = require("express-validator");
const asyncHandler = require('express-async-handler')
const multer = require('multer');
const path = require('path');


/**
 * @property Home page
 */
exports.index = asyncHandler(async (req, res, next) => {
    // Get details of games, consoles, accesories, and genres.
    const [
        numGames,
        numAccessories,
        numGameConsoles,
        numGenres,
    ] = await Promise.all([
      Game.countDocuments({}).exec(),
      Accessories.countDocuments({}).exec(),
      GameConsole.countDocuments({}).exec(),
      Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
      title: "The Game Store",
      game_count: numGames,
      accessories_count: numAccessories,
      game_consoles_count: numGameConsoles,
      genre_count: numGenres,
  });
});


/**
 * @property Display list of all games.
 */
exports.game_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game list");
});


/**
 * @property Display detail page for a specific game.
 */
exports.game_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: game detail: ${req.params.id}`);
});


/**
 * @property Display game create form on GET.
 */
exports.game_create_get = asyncHandler(async (req, res, next) => {
    const [allPlatforms, allGenres] = await Promise.all([
        Platform.find().exec(),
        Genre.find().exec(),
    ]);

    res.render("game_form", {
        title: "Add New Game",
        platforms: allPlatforms,
        genres: allGenres,
    });
});


/**
 * @property Handle game create on POST.
 */
exports.game_create_post = [
    // Convert the platform to an array.
    (req, res, next) => {
        if (!(req.body.platform instanceof Array)) {
            if (typeof req.body.platform === "undefined") {
                req.body.platform = []
            } else {
                req.body.platform = new Array(req.body.platform);
            }
        }
        next();
    },

    // Convert the genre to an array.
    (req, res, next) => {
        if (!(req.body.genre instanceof Array)) {
            if (typeof req.body.genre === "undefined") {
                req.body.genre = []
            } else {
                req.body.genre = new Array(req.body.genre);
            }
        }
        next();
    },

    /*(req, res, next) => {
        
        try {
            let storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, 'public/images/uploads');
                },
                filename: (req, file, cb) => {
                    fileName = Date.now() + file.originalname;
                    cb(null, Date.now() + file.originalname)
                }
            })
            let upload = multer({ storage: storage }).single('imageFile');
            upload(req, res, function (err) {
                if (err) {
                    console.log(err);
                    return res.end("Error uploading file.");
                } else {
                    res.end("File has been uploaded");
                }
            });
        } catch (error) {

        }
        next();
    },*/
    // Validate and sanitize fields.
    body("title", "Title must not be empty.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("description", "Description must not be empty.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("publisher", "Publisher must not be empty.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("platform.*").escape(),
    body("genre.*").escape(),
    body("imageFile", "Must select an image").escape(),
    body("rating").escape(),
    body("condition").escape(),
    body("status").escape(),
    body("release_date", "Invalid Date")
        .optional({ checkFalsy: true })
        .isISO8601()
        .toDate(),
    body("price", "Price must not be empty")
        .trim()
        .isLength({ min: 1, max: 8 })
        .escape(),
    body("upc", "UPC must not be empty")
        .optional({ checkFalsy: true })
        .isNumeric()
        .isLength({ min: 12 })
        .escape(),

    // Process request after validation and sanitation.
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        let fileName = 'foo'
        try {
            let storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, 'public/images/uploads');
                },
                filename: (req, file, cb) => {
                    fileName = Date.now() + file.originalname;
                    cb(null, Date.now() + file.originalname)
                }
            })
            let upload = multer({ storage: storage }).single('imageFile');
            upload(req, res, function (err) {
                if (err) {
                    console.log(err);
                    return res.end("Error uploading file.");
                } else {
                    res.end("File has been uploaded");
                }
            });
        } catch (error) {

        }

        console.log("filename: " + fileName)
        // Create a Game Object.
        const game = new Game({
            title: req.body.title,
            platform: req.body.platform,
            genre: req.body.genre,
            description: req.body.description,
            imageFile: req.body.imageFile,
            rating: req.body.rating,
            publisher: req.body.publisher,
            condition: req.body.condition,
            status: req.body.status,
            release_date: req.body.release_date,
            price: req.body.price,
            upc: req.body.upc,
        });

        if (!errors.isEmpty()) {
            /* There are errors.  Render form again with sanitized values and 
              error messages. */
              const [allPlatforms, allGenres] = await Promise.all([
                Platform.find().exec(),
                Genre.find().exec(),
            ]);
        
            // Mark our selected platforms as checked.
            for (const platform of allPlatforms) {
                if (game.platform.indexOf(platform._id) > -1) {
                    platform.checked = 'true';
                }
            }

            // Mark our selected genres as checked.
            for (const genre of allGenres) {
                if (game.genre.indexOf(genre._id) > -1) {
                    genre.checked = 'true';
                }
            }
            res.render("game_form", {
                title: "Add New Game",
                platforms: allPlatforms,
                genres: allGenres,
                errors: errors.array(),
            });
        } else {
            // Data from form is valid.  Save game.
            await game.save();
            res.redirect(game.url);
        }
    })
];


/**
 * @property Display game delete form on GET.
 */
exports.game_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game delete GET");
});


/**
 * @property Handle game delete on POST.
 */
exports.game_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game delete POST");
});


/**
 * @property Display game update form on GET.
 */
exports.game_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game update GET");
});


/**
 * @property Handle game update on POST.
 */
exports.game_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game update POST");
});
