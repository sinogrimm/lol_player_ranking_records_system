/**
 * Names: Hunter Shipman, Rebecca Wang
 * Group: 40
 * Assignment: Project Step 3 Draft
 * Description: Data Manipulation Queries

 The following queries are all our own work.
*/


/* FOR PLAYERS PAGE */

-- RW: get all players and their rank title to display list of players

SELECT Players.player_id, Players.name, Ranks.title, Players.lp
FROM Players
    INNER JOIN Ranks
        ON Players.rank_id = Ranks.rank_id
ORDER BY Players.player_id DESC
;

-- RW: get rank ID and title to populate rank dropdown

SELECT Ranks.rank_id, Ranks.title
FROM Ranks
;

-- RW: add new player

INSERT INTO Players (name, rank_id, lp)
VALUES (:name_input, :rank_id_from_dropdown, :lp_input);

-- RW: get all players that partially match the name input from search bar

SELECT Players.player_id, Players.name, Ranks.title, Players.lp
FROM Players
    INNER JOIN Ranks
        ON Players.rank_id = Ranks.rank_id
WHERE Players.name LIKE :input_from_search_bar%
ORDER BY Players.player_id DESC
;

-- RW: get player ranked history for viewing a player

SELECT Games.game_id, Games.start_time,
    Teams.result, PlayerRecords.lp_change
FROM Games
    INNER JOIN Teams
        ON Teams.game_id = Games.game_id
    INNER JOIN PlayerRecords
        ON PlayerRecords.team_id = Teams.team_id
    INNER JOIN Players
        ON Players.player_id = PlayerRecords.player_id
WHERE Players.player_id = (
    SELECT Players.player_id
    FROM Players
    WHERE Players.player_id = :player_id_from_click
)
ORDER BY Games.start_time DESC
;

-- RW: update player information for editing a player

UPDATE Players SET Players.name = :name_input, Players.rank_id = :rank_id_from_dropdown, Players.lp = :lp_input
WHERE Players.player_id = :player_id_from_click
;

-- RW: remove player information for deleting a player

DELETE FROM Players
WHERE Players.player_id = :player_id_from_click
;


/* FOR GAMES PAGE */

-- RW: get all games to display list of games

SELECT Games.game_id, Games.start_time, Games.duration
FROM Games
ORDER BY Games.game_id DESC
;

-- RW: add new game, teams for game, and player records for teams

INSERT INTO Games (`start_time`, `duration`)
VALUES (:start_time_input, :duration_input);
SET @new_game = LAST_INSERT_ID();

INSERT INTO Teams (`game_id`, `result`)
VALUES (@new_game, :string_from_dropdown);
SET @team_a = LAST_INSERT_ID();

INSERT INTO PlayerRecords (team_id, player_id, lp_change)
VALUES
(   @team_a,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_a,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_a,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_a,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_a,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
);

INSERT INTO Teams (`game_id`, `result`)
VALUES (@new_game, :string_from_dropdown);
SET @team_b = LAST_INSERT_ID();

INSERT INTO PlayerRecords (team_id, player_id, lp_change)
VALUES
(   @team_b,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_b,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_b,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_b,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
),
(   @team_b,
    (SELECT Players.player_id FROM Players WHERE Players.name = :name_input),
    :lp_input
);


/* FOR TEAMS PAGE */

-- RW: get all teams for list of teams

SELECT Teams.team_id, Teams.game_id, Teams.result
FROM Teams
ORDER BY Teams.team_id DESC
;

/* FOR RANKS PAGE */

-- RW: get all ranks for list of ranks

SELECT Ranks.rank_id, Ranks.title, Ranks.lp_threshold
FROM Ranks
ORDER BY Ranks.lp_threshold ASC;

/* FOR PLAYERRECORDS PAGE */

-- RW: get all player records for list of records

SELECT PlayerRecords.player_record_id, PlayerRecords.team_id,
    PlayerRecords.player_id, PlayerRecords.lp_change
FROM PlayerRecords
ORDER BY PlayerRecords.player_record_id DESC
;


