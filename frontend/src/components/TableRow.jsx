
const TableRow = ({ object }) => {
    return (
        <tr>
            {Object.values(object).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
        </tr>
    )
}

export default TableRow;