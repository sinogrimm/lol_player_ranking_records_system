const CreatePlayer = ({ ranks, backendURL, refreshPlayers }) => {

    return (
        <>

        <h2>Add New Player</h2>

        <form className='cuForm'>
            <label htmlFor="set_name">Name: </label>
            <input
                type="text"
            />

            <label htmlFor="set_rank">Rank: </label>
            <select>
                <option value="">Select a Rank</option>
            </select>

            <label htmlFor="set_lp">LP: </label>
            <input
                type="number"
            />

            <button>Add</button>
        </form>

        </>
    );
};

export default CreatePlayer;