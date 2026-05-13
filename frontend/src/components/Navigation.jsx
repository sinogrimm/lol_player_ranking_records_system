import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            Navigation:
            <Link to='/'>Home</Link>
            <Link to='/players'>Players</Link>
            <Link to='/games'>Games</Link>
            <Link to='/teams'>Teams</Link>
            <Link to='/playerrecords'>Player Records</Link>
            <Link to='/ranks'>Ranks</Link>
        </nav>
    )
}

export default Navigation;

