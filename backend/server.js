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
        // get all player information for table
        const players_query = `
            SELECT Players.player_id AS "Player ID", Players.name AS "Name",
                Ranks.title AS "Rank", Players.lp AS "League Points"
            FROM Players
                INNER JOIN Ranks
                ON Players.rank_id = Ranks.rank_id
            ORDER BY Players.player_id DESC
            ;`;
        // get rank id and title for dropdown
        const ranks_query = `
            SELECT Ranks.rank_id, Ranks.title
            FROM Ranks
            ORDER BY Ranks.lp_threshold ASC
            ;`;

        const [players] = await db.query(players_query);
        const [ranks] = await db.query(ranks_query);
    
        res.status(200).json({ players, ranks });  // send results to frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        res.status(500).send("An error occurred while executing the database queries.");
    }
    
});

app.get('/player-dropdown', async (req, res) => {
    try {
        // get player id and name for dropdown
        const players_query = `
            SELECT Players.player_id, Players.name
            FROM Players
            ORDER BY Players.name ASC
            ;`;
        
        const [players] = await db.query(players_query);
    
        res.status(200).json({ players });  // send results to frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        res.status(500).send("An error occurred while executing the database queries.");
    }
    
});

app.get('/ranks', async (req, res) => {
    try {
        // get all rank information for table
        const ranks_query = `
            SELECT Ranks.rank_id AS "Rank ID", Ranks.title AS "Title", Ranks.lp_threshold "Threshold"
            FROM Ranks
            ORDER BY Ranks.lp_threshold ASC
            ;`;

        const [ranks] = await db.query(ranks_query);
    
        res.status(200).json({ ranks });  // send results to frontend

    } catch (error) {
        console.error("Error executing queries:", error);
        res.status(500).send("An error occurred while executing the database queries.");
    }
    
});

// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});