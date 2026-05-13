import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerDropdown from '../components/PlayerDropdown';


function CreateGame({ backendURL }) {
    const [players, setPlayers] = useState([]);

    const getPlayersForDropdown = async function () {
        try {
            const response = await fetch(backendURL + '/player-dropdown');
            const {players} = await response.json();

            setPlayers(players);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPlayersForDropdown();
    }, []);

    const navigate = useNavigate();
    
    const confirmCreate = () => {
        event.preventDefault();
        const confirmed = window.confirm("Create game ID?");
        if (confirmed) {
            alert("Created game ID");
            navigate("/games");
        }
    }

    return (
        <>
        <h2>Create New Game</h2>
        <p>Enter information required to create a game and create the two teams for the game.</p>
        <p>Note: All fields must be field. Requirement will be enforced through form and backend.</p>
        <hr />
        <ul>
            <li>Submit: validates the inputs before sending them in a request.
                Once the game and two teams are successfully created, the user will be navigated back
                to the Games page.
            </li>
            <li>Cancel: returns the user to the Games page.</li>
        </ul>
        <hr />

        <form>
            <label>Start Time: </label>
            <input
                type="text"
                placeholder="YYYY-MM-DD HH:MM:SS"
            />
            <br />
            <label>Duration: </label>
            <input
                type="text"
                placeholder="HH:MM:SS"
            />
        <hr />

            <h3>Team A</h3>

            <label>Player 1: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 2: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 3: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 4: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 5: </label>
            <PlayerDropdown players={players}/><br />

            <label>Result: </label>
            <select>
                <option value="">Select Result</option>
                <option value="VICTORY">VICTORY</option>
                <option value="DEFEAT">DEFEAT</option>
            </select>
        <hr />

            <h3>Team B</h3>

            <label>Player 1: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 2: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 3: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 4: </label>
            <PlayerDropdown players={players}/><br />
            <label>Player 5: </label>
            <PlayerDropdown players={players}/><br />
            
            <label>Result: </label>
            <select>
                <option value="">Select Result</option>
                <option value="VICTORY">VICTORY</option>
                <option value="DEFEAT">DEFEAT</option>
            </select><br />

            <br />
        </form>
        <hr />
        <button id="submit" onClick={confirmCreate}>Submit</button>
        <button id="cancel" onClick={() => navigate("/games")}>Cancel</button>

        </>
    )

}

export default CreateGame;