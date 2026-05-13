import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewGame() {
    const navigate = useNavigate();

    return (
        <>
        <h1>[game_id - start_time - duration]</h1>
        <p>Allows the user to view the teams associated with the selected game
            and the players in each team.
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
                    <th>name</th>
                    <th>rank</th>
                <   th>lp_change</th>
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
                    <th>name</th>
                    <th>rank</th>
                <   th>lp_change</th>
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