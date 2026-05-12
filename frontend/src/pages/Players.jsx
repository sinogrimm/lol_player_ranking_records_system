import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import TableRow from '../components/TableRow';


function Players({ backendURL }) {
    const [players, setPlayers] = useState([]);

    const getPlayers = async function () {
        try {
            // GET request
            const response = await fetch(backendURL + '/players');
            // convert response to JSON
            const {players} = await response.json();
            // update state with data
            setPlayers(players);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getPlayers(); }, []);

    const notifyCreate = () => {
        event.preventDefault();
        const confirmed = window.confirm("Create player ID?");
        if (confirmed) {
            alert("Created player ID");
        }
    }

    return (
        <>
            <h1>Players</h1>

            <p>Includes a section for adding players, a search bar for finding players,
                and a table showing the information for each player.
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
                id="player_search_bar"
                type="text"
                placeholder="Enter a player name"
            />
            <button>Search</button>        

            {/* mock table */}
            <table>
                <thead>
                    <tr>
                        {players.length > 0 && Object.keys(players[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th></th>{/* empty column for view*/}
                        <th></th>{/* empty column for edit*/}
                        <th></th>{/* empty column for delete*/}
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <TableRow key={index} rowObject={player}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Players;