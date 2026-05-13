

function PlayerRecords() {

    return (
        <>
            <h1>Player Records</h1>
            <p>Displays the Player Record ID, Team ID, Player Name, and League
                Point Change (LP Change) for each Player Record. Cannot be
                deleted as to retain a complete record of games and how they
                affected each player.
            </p>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Player Record ID</th>
                        <th>Team ID</th>
                        <th>Player Name</th>
                        <th>LP Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </>        
    )

}

export default PlayerRecords;