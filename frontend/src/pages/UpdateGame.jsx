import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateGame() {

    const navigate = useNavigate();

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
        <hr />

            <h3>Team ID</h3>

            <label>Player 1: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 2: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 3: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 4: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 5: </label>
            <input type="text" placeholder="Player name"/><br />
        <hr />



            <h3>Team ID</h3>

            <label>Player 1: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 2: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 3: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 4: </label>
            <input type="text" placeholder="Player name"/><br />
            <label>Player 5: </label>
            <input type="text" placeholder="Player name"/><br />
            
            <br />
            <br />
        <hr />
        </form>
        <button onClick={confirmUpdate}>Submit</button>
        <button onClick={() => navigate("/games")}>Cancel</button>

        </>
    )
    
}

export default UpdateGame;