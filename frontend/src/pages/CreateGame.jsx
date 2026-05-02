import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateGame() {

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
        <ul>
            <li>Submit: validates the inputs before sending them in a request.
                Once the game and two teams are successfully created, the user will be navigated back
                to the Games page.
            </li>
            <li>Cancel: returns the user to the Games page.</li>
        </ul>

        <form>
            <label>Start Time: </label>
            <input
                type="text"
                placeholder="YYYY-MM-DD"
            />
            <br />
            <label>Duration: </label>
            <input
                type="text"
                placeholder="HH:MM:SS"
            />

            <h3>Team 1</h3>

            <label>Player 1: </label>
            <input type="text" /><br />
            <label>Player 2: </label>
            <input type="text" /><br />
            <label>Player 3: </label>
            <input type="text" /><br />
            <label>Player 4: </label>
            <input type="text" /><br />
            <label>Player 5: </label>
            <input type="text" /><br />

            <label>Result: </label>
            <select>
                <option value=""></option>
                <option>VICTORY</option>
                <option>DEFEAT</option>
            </select>

            <h3>Team 2</h3>

            <label>Player 1: </label>
            <input type="text" /><br />
            <label>Player 2: </label>
            <input type="text" /><br />
            <label>Player 3: </label>
            <input type="text" /><br />
            <label>Player 4: </label>
            <input type="text" /><br />
            <label>Player 5: </label>
            <input type="text" /><br />
            
            <label>Result: </label>
            <select>
                <option value=""></option>
                <option>VICTORY</option>
                <option>DEFEAT</option>
            </select><br />

            <br />
        </form>
        <button onClick={confirmCreate}>Submit</button>
        <button onClick={() => navigate("/games")}>Cancel</button>

        </>
    )

}

export default CreateGame;