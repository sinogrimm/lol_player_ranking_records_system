/**
 * Names: Hunter Shipman, Rebecca Wang
 * Group: 40
 * Assignment: Project Step 2 Draft
 * Description: Data Definition Queries and Sample Data

 The following queries are our own work (edit if needed).
*/

SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;


/* CREATE TABLES */

-- RW: create Ranks table

DROP TABLE IF EXISTS Ranks;
CREATE TABLE Ranks (
    rank_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    lp_threshold INT(11) UNIQUE NOT NULL
);


-- ...



/* INSERT DATA */

-- RW: insert Ranks data

INSERT INTO Ranks
(title, lp_threshold)
VALUES
('Iron', 0),
('Bronze', 100),
('Silver', 200),
('Gold', 300),
('Platnium', 400),
('Emerald', 500),
('Diamond', 600),
('Master', 700),
('Grandmaster', 800),
('Challenger', 900);

-- ...




SET FOREIGN_KEY_CHECKS=1;
COMMIT;