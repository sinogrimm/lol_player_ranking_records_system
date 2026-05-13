import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RankDropdown from '../components/RankDropdown';

function UpdatePlayer({ backendURL }) {
    const navigate = useNavigate();
    const [ranks, setRanks] = useState([]);

    const getRanksForDropdown = async function () {
        try {
            // GET request for rank data
            const response = await fetch(backendURL + '/rank-dropdown');
            // convert response to JSON and destructure into array
            const {ranks} = await response.json();

            setRanks(ranks);    // update state with data

        } catch (error) {
            console.log(error);
        }
    }

    const confirmUpdate = () => {
        event.preventDefault();
        const confirmed = window.confirm("Update player ID?");
        if (confirmed) {
            alert("Updated player ID");
            navigate("/players");
        }
    }

    useEffect(() => {
        getRanksForDropdown();
    }, []);

    return (
        <>

        <h1>Update Player</h1>
        <p>Allows the user to input and submit changes to the selected player.</p>
        <hr />
        <ul>
            <li>Update: initiates confirmation popup. If 'OK', validates information
                before sending an update request. Notifies the user whether the player
                information was successfully updated.
            </li>
            <li>Cancel: returns the user back to the Players page.</li>
        </ul>
        <hr />

        <form>
            <label>Name: </label>
            <input
                type="text"
                placeholder="Player Name"
            />

            <label>Rank: </label>
            <RankDropdown ranks={ranks}/>

            <label>League Points: </label>
            <input
                type="number"
                placeholder="Current LP"
            />
            <button onClick={confirmUpdate}>Update</button>
        </form>
        
        <button id="cancel" onClick={() => navigate("/players")}>Cancel</button>
        </>
    )
    
}

export default UpdatePlayer;