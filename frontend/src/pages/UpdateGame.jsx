import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerDropdown from '../components/PlayerDropdown';

function UpdateGame({ backendURL }) {
    const navigate = useNavigate();
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

    const confirmUpdate = () => {
        event.preventDefault();
        const confirmed = window.confirm("Update game ID?");
        if (confirmed) {
            alert("Updated game ID");
            navigate("/games");
        }
    }

    return (
        <>
        <h1>Update Game</h1>
        <p>Allows user to input and submit changes to the selected game, teams, and
            player records.</p>
        <hr />
        <ul>
            <li>Update: initiates confirmation popup. If 'OK', validates the inputs before sending them in a request.
                Once everything is successfully updated, the user will be navigated back to the Games page.
            </li>
            <li>Cancel: returns the user to the Games page.</li>
        </ul>
        <hr />

        <form>
            <label>Start Time: </label>
            <input
                type="text"
                placeholder="Current Start Time"
            />
            <br />
            <label>Duration: </label>
            <input
                type="text"
                placeholder="Current Duration"
            />

        <br />

            <h3>Team ID</h3>

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

        <br />

            <h3>Team ID</h3>

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

        </form>

        <hr />

        <button id="submit" onClick={confirmUpdate}>Update</button>
        <button id="cancel" onClick={() => navigate("/games")}>Cancel</button>

        </>
    )

}

export default UpdateGame;