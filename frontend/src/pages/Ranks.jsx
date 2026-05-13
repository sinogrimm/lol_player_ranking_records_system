import { useState, useEffect } from 'react';
import R_Row from '../components/R_Row';

function Ranks({ backendURL }) {
    const [ranks, setRanks] = useState([]);
    
    const getRanks = async function () {
        try {
            // GET request for rank data
            const response = await fetch(backendURL + '/ranks');
            // convert response into JSON and destructure into array
            const {ranks} = await response.json();

            setRanks(ranks);
    
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getRanks();
    }, []);

    return (
        <>
            <h1>Ranks</h1>
            <p>Displays the identification number, title, and lower league point threshold for
                each available rank.</p>
            <p>Note: This is a static lookup page. New ranks cannot be added, current ranks cannot be
                updated, and current ranks cannot be deleted. The scope of our project is limited to
                these ten ranks.</p>
            <hr />
            <table>
                <thead>
                    <tr>
                        {ranks.length > 0 && Object.keys(ranks[0]).map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ranks.map((rank, index) => (
                        <R_Row key={index} object={rank}/>
                    ))}
                </tbody>
            </table>
        </>        
    )

}

export default Ranks;