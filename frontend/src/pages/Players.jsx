import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Players() {

    const navigate = useNavigate();

    const notifyCreate = () => {
        event.preventDefault();
        const confirmed = window.confirm("Create player ID?");
        if (confirmed) {
            alert("Created player ID");
        }
    }

    const confirmDelete = () => {
        const confirmed = window.confirm("Delete player ID?");
        if (confirmed) {
            alert("Deleted player ID");
        }
    }

    return (
        <>
            <h1>Players</h1>

            <p>Includes a section for adding players, a search bar for finding players,
                and a table showing each players ID, Player Name, Rank,
                and amount of League Points (LP).
            </p>
            <ul>
                <li>Add: Initiates confirmation popup. If 'OK', validates the submitted information
                    before sending a request with the inputs to create a new player. Notifies the user
                    whether the new player was successfully created.</li>
                <li>Search: filters the results of the table by comparing the inputted
                string fragment.</li>
                <li>View: takes the user to the ViewPlayer page.</li>
                <li>Edit: take the user to the UpdatePlayer page.</li>
                <li>Delete: initiates a confirmation popup. If 'OK', a request will be sent to delete 
                the associated player and a popup will notify the user whether the new player was
                successfully deleted.</li>
            </ul>

            <h2>Add New Player</h2>

            <form>
                <label>Name: </label>
                <input type="text"/>
                <label>Rank: </label>
                <select>
                    <option>Select Rank</option>
                </select>
                <label>LP: </label>
                <input type="text"/>
                <button onClick={notifyCreate}>Add</button>
            </form>
            
            <h2>List of Players</h2>

            {/* search bar */}
            <input
                type="text"
                placeholder="Enter a player name"
            />
            <button>Search</button>        

            {/* mock table */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Player Name</th>
                        <th>Rank</th>
                        <th>LP</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button onClick={() => navigate("/viewplayer")}>View</button></td>
                        <td><button onClick={() => navigate("/updateplayer")}>Edit</button></td>
                        <td><button onClick={confirmDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Players;