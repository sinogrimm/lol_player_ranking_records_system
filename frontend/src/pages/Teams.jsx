import { useState, useEffect } from 'react';
import TableRow from "../components/TableRow";

function Teams({ backendURL }) {
    const [teams, setTeams] = useState([]);

    const getTeams = async function() {
        try {
            // GET request for teams data
            const response = await fetch(backendURL + '/teams');
            // convert response to JSON and destructure into array
            const {teams} = await response.json();

            setTeams(teams); // update state with data

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTeams();  
    }, []);

    return (
        <>
            <h1>Teams</h1>
            <p>Displays the Team ID, Game ID, and Result for each team.</p>
            <p>Note: This is a static lookup page only. New teams are automatically added through 
                the CreateGames page. Teams are tied to games and player records, so existing teams
                cannot be edited or deleted.</p>
            <hr />
            <table>
                <thead>
                    <tr>
                        {teams.length > 0 && Object.keys(teams[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <TableRow key={index} object={team}/>
                    ))}
                </tbody>
            </table>
        </>        
    )

}

export default Teams;