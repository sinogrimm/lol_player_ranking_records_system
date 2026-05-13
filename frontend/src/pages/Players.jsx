import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import RankDropdown from '../components/RankDropdown';
import PlayersTableRow from '../components/PlayersTableRow';


function Players({ backendURL }) {
    const [ranks, setRanks] = useState([]);
    const [players, setPlayers] = useState([]);
    
    const getRanksForDropdown = async function() {
        try {
            // GET request for rank data
            const response = await fetch(backendURL + '/rank-dropdown');
            // convert response to JSON and destructure into array
            const {ranks} = await response.json();

            setRanks(ranks); // update state with data

        } catch (error) {
            console.log(error);
        }
    }

    const getPlayers = async function () {
        try {
            // GET request for all player data
            const response = await fetch(backendURL + '/players');
            // convert response to JSON and destructure into array
            const {players} = await response.json();

            setPlayers(players); // update state with data

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRanksForDropdown();
        getPlayers();  
    }, []);

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

            <p>Includes a section for adding players and a table showing each 
                Player ID, Name, Rank, and amount of League Points (LP).
            </p>
            <hr />
            <ul>
                <li>Add: Initiates confirmation popup. If 'OK', validates the submitted information
                    before sending a request with the inputs to create a new player. Notifies the user
                    whether the new player was successfully created.</li>
                <li>View: takes the user to the ViewPlayer page.</li>
                <li>Edit: take the user to the UpdatePlayer page.</li>
                <li>Delete: initiates a confirmation popup. If 'OK', a request will be sent to delete 
                the associated player and a popup will notify the user whether the new player was
                successfully deleted.</li>
            </ul>
            <hr />

            <h2>Add New Player</h2>

            <form>
                <label>Name: </label>
                <input type="text"/>

                <label>Rank: </label>
                <RankDropdown ranks={ranks} />

                <label>League Points: </label>
                <input type="number"/>

                <button onClick={notifyCreate}>Add</button>
            </form>
            <hr />
            
            <h2>List of Players</h2>

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
                        <PlayersTableRow key={index} rowObject={player}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Players;