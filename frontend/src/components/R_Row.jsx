// read-only table row component

const R_Row = ({ object }) => {
    return (
        <tr>
            {Object.values(object).map((value, index) => (
                <td key={index}>{value}</td>
            ))}
        </tr>
    )
}

export default R_Row;