import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GamesTableRow from '../components/GamesTableRow';

function Games({ backendURL }) {
    const navigate = useNavigate();

    const [games, setGames] = useState([]);
    
    const getGames = async function () {
        try {
            // GET request for rank data
            const response = await fetch(backendURL + '/games');
            // convert response into JSON and destructure into array
            const {games} = await response.json();

            setGames(games);
    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGames();
    }, []);

    return (
        <>

        <h1>Games</h1>
        <p>Displays a table showing the Game ID, Start Time, and Duration for each recorded game.
            Allows the addition of a new game via clicking the "Add New Game" button,
            which routes to the CreateGame page. Allows the editing of an existing game via
            clicking the respective "Edit" button. Cannot be deleted as to retain a complete record of games.</p>
        <hr />
        <ul>
            <li>Add New Game: takes the user to the CreateGame page.</li>
            <li>View: takes the user to the ViewGame page.</li>
            <li>Edit: takes the user to the UpdateGame page.</li>
        </ul>
        <hr />
        
        <button id="submit" onClick={() => navigate("/creategame")}>Add New Game</button>

        <table>
            <thead>
                <tr>
                    {games.length > 0 && Object.keys(games[0]).map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                    <th></th>{/* empty column for view buttons*/}
                    <th></th>{/* empty column for edit buttons*/}
                </tr>
            </thead>
            <tbody>
                {games.map((games, index) => (
                    <GamesTableRow key={index} object={games}/>
                ))}
            </tbody>
        </table>

        </>
    )
}

export default Games;