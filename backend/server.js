// ########################################
// ########## SETUP

// Database
const db = require('./database/rw-db-connector');   // match to local file to use!

// Express
const express = require('express');
const app = express();

// Middleware
const cors = require('cors');
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json()); // this is needed for post requests


const PORT = 1787;

// ########################################
// ########## ROUTE HANDLERS

// READ ROUTES
app.get('/players', async (req, res) => {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display the names of the homeworlds
        const query = `
            SELECT Players.player_id AS "Player ID", Players.name AS "Name",
            Ranks.title AS "Rank", Players.lp AS "League Points"
            FROM Players
                INNER JOIN Ranks
                ON Players.rank_id = Ranks.rank_id
            ORDER BY Players.player_id DESC
            ;`;
        //const query1 = `SELECT bsg_people.id, bsg_people.fname, bsg_people.lname, \
            //bsg_planets.name AS 'homeworld', bsg_people.age FROM bsg_people \
            //LEFT JOIN bsg_planets ON bsg_people.homeworld = bsg_planets.id;`;
        const query2 = 'SELECT * FROM bsg_planets;';
        const [players] = await db.query(query);
        //const [homeworlds] = await db.query(query2);
    
        res.status(200).json({ players });  // Send the results to the frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        // Send a generic error message to the browser
        res.status(500).send("An error occurred while executing the database queries.");
    }
    
});

// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});