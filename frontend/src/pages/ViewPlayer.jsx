import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ViewPlayer() {
    
    const navigate = useNavigate();

    return (
        <>
        <h1>[player_id - name - rank] </h1>

        <p>Displays the selected player's game history.</p>
        <hr />
        <ul>
            <li>Back: returns the user to the Players page.</li>
        </ul>
        <hr />

        <h2>Game History</h2>
        
        <table>
            <thead>
                <tr>
                    <th>Game ID</th>
                    <th>Start Time</th>
                    <th>Result</th>
                    <th>LP Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <button onClick={() => navigate("/players")}>Back</button>
        </>
    )
}

export default ViewPlayer;