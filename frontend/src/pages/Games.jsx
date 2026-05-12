import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Games() {
    const navigate = useNavigate();

    return (
        <>

        <h1>Games</h1>
        <p>Displays a table showing the ID, Start Time, and Duration for each recorded game.
            Allows the addition of a new game via clicking the "Add NewGame" button,
            which routes to the CreateGame page.
        </p>
        <ul>
            <li>Add New: takes the user to the CreateGame page.</li>
            <li>View: takes the user to the ViewGame page.</li>
            <li>Edit: takes the user to the UpdateGame page.</li>
        </ul>
        
        <button onClick={() => navigate("/creategame")}>Add New Game</button>

        {/* mock table */}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th></th>
                    <th></th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={() => navigate("/viewgame")}>View</button></td>
                    <td><button onClick={() => navigate("/updategame")}>Edit</button></td>
                </tr>
            </tbody>
        </table>

        </>
    )    

}

export default Games;