import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewGame() {
    const navigate = useNavigate();

    return (
        <>
        <h1>[game_id - start_time - duration]</h1>
        <p>Allows the user to view the Team ID and Results associated with the selected game.
            For each team, displays the player Name, Rank, and league point (LP) change from 
            their respective records.
        </p>
        <hr />
        <ul>
            <li>Back: returns the user to the Games page.</li>
        </ul>
        <hr />

        <h2>Team ID: RESULT</h2>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rank</th>
                <   th>LP Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <hr />

        <h2>Team ID: RESULT</h2>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rank</th>
                <   th>LP Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <hr />

        <button onClick={() => navigate("/games")}>Back</button>

        </>
    )

}

export default ViewGame;