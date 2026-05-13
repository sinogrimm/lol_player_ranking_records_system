import { Navigate, useNavigate } from 'react-router-dom';

const GamesTableRow = ({ object }) => {
    const navigate = useNavigate();

    return (
        <tr>
            {Object.values(object).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
            <td><button onClick={() => navigate("/viewgame")}>View</button></td>
            <td><button onClick={() => navigate("/updategame")}>Edit</button></td>
        </tr>
    )
}

export default GamesTableRow;