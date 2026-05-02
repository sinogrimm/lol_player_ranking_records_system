import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Games() {
    const navigate = useNavigate();

    return (
        <>

        <h1>Games</h1>
        <button onClick={() => navigate("/creategame")}>Add New</button>

        {/* mock table */}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th></th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button onClick={() => navigate("/viewgame")}>View</button></td>
                </tr>
            </tbody>
        </table>

        </>
    )    

}

export default Games;