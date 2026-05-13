
const RankDropdown = ({ ranks }) => {
    return (
        <select>
            <option value="">Select Rank</option>
            {ranks.map((rank, index) => (
                <option value={rank.id} key={index}>{rank.title}</option>
            ))}
        </select>
    )
}

export default RankDropdown;