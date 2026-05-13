

const PlayerDropdown = ({ players }) => {
    return (
        <select>
            <option value="">Select Player</option>
            {players.map((player, index) => (
                <option value={player.id} key={index}>{player.name}</option>
            ))}
        </select>
    )
}

export default PlayerDropdown;