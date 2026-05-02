import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePlayer from '../components/CreatePlayer';


function Players() {
    const confirmDelete = () => {
        const confirmed = window.confirm("Delete player ID?");
    }

    return (
        <>
            <h1>Players</h1>
            <p>Includes sections for adding and updating players, a search bar for finding players,
                and the table showing the id, name, rank, and league points held for each player.
            </p>
            <p>The add button will validate the submitted information before sending a request
                with the inputs to create a new player.
            </p>
            <p>The view button will lead to the ViewPlayer page.</p>
            <p>The edit button will take the user to the UpdatePlayer page.
            </p>
            <p>The delete button will initiate a confirmation popup before sending a request to delete 
                the associated player.
            </p>

            <CreatePlayer></CreatePlayer><br />

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
                        <th>Name</th>
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
                        <td><button>View</button></td>
                        <td><button>Edit</button></td>
                        <td><button onClick={confirmDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Players;