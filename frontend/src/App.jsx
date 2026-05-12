import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Players from './pages/Players';
import ViewPlayer from './pages/ViewPlayer';
import UpdatePlayer from './pages/UpdatePlayer';
import Games from './pages/Games';
import CreateGame from './pages/CreateGame';
import ViewGame from './pages/ViewGame';
import UpdateGame from './pages/UpdateGame';
import Teams from './pages/Teams'
import PlayerRecords from './pages/PlayerRecords';
import Ranks from './pages/Ranks';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Define the backend port and URL for API requests
const backendPort = 1787;  // Use the port you assigned to the backend server, this would normally go in a .env file
const backendURL = `http://classwork.engr.oregonstate.edu:${backendPort}`;

function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<Players backendURL={backendURL} />} />
                <Route path="/viewplayer" element={<ViewPlayer />} />
                <Route path="/updateplayer" element={<UpdatePlayer />} />
                <Route path="/games" element={<Games />} />
                <Route path="/creategame" element={<CreateGame />} />
                <Route path="/viewgame" element={<ViewGame />} />
                <Route path="/updategame" element={<UpdateGame />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/playerrecords" element={<PlayerRecords />} />
                <Route path="/ranks" element={<Ranks />} />
            </Routes>
            <Footer />
        </>
    );

} export default App;
