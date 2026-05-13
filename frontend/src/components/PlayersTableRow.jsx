import { Navigate, useNavigate } from 'react-router-dom';

const PlayersTableRow = ({ rowObject }) => {

    const navigate = useNavigate();

    

    const confirmDelete = () => {
        const confirmed = window.confirm("Delete player ID?");
        if (confirmed) {
            alert("Deleted player ID");
        }
    }

    return (
        <tr>
            {Object.values(rowObject).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
            <td><button onClick={() => navigate("/viewplayer")}>View</button></td>
            <td><button onClick={() => navigate("/updateplayer")}>Edit</button></td>
            <td><button onClick={confirmDelete}>Delete</button></td>
        </tr>
    )
}

export default PlayersTableRow;