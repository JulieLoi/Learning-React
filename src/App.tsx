import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Pages/Home.page';
import ReactFactsPage from './Pages/ReactFacts.page';
import DigitalBusinessCardPage from './Pages/DigitalBusinessCard.page';
import JokesPage from './Pages/Jokes.page';
import AirBnbExperiencePage from './Pages/AirBnbExperience.page';
import TravelJournalPage from './Pages/TravelJournal.page';
import MemeGeneratorPage from './Pages/MemeGenerator.page';
import NotesAppPage from './Pages/NotesApp.page';
import TenziesPage from './Pages/Tenzies.page';
import QuizzicalRoutes from './Routes/QuizzicalRoutes';
import Taskify from './Pages/Taskify.page';


function App() {
    let navigate = useNavigate();


    return (
        <>
            <div className="navbar">
                <div className="home-container" onClick={() => navigate("/home")}>
                    <AiOutlineHome 
                        className="icon"
                    />
                    <span className="home-text">Home</span>
                </div>
                <div className="react__container">
                    <img src="/logo192.png" alt="react logo" className="react__logo" />
                    <span className="react__text">Learning React</span>
                </div>
                <div className="home-container invisible" onClick={() => navigate("/home")}>
                    <AiOutlineHome 
                        className="icon"
                    />
                    <span className="home-text">Home</span>
                </div>
            </div>

            <Routes>
                <Route path="/home" element={<HomePage />}>HOME PAGE</Route>
                <Route path="/reactfacts" element={<ReactFactsPage />}>React Facts Page</Route>
                <Route path="/digitalbusinesscard" element={<DigitalBusinessCardPage />}>Digital Business Card Page</Route>
                <Route path="/jokes" element={<JokesPage />}>Jokes Page</Route>
                <Route path="/airbnb" element={<AirBnbExperiencePage />}>AirBnb Page</Route>
                <Route path="/traveljournal" element={<TravelJournalPage />}>Travel Journal Page</Route>
                <Route path="/memegenerator" element={<MemeGeneratorPage />}>Meme Generator Page</Route>
                <Route path="/notesapp" element={<NotesAppPage />}>Notes App Page</Route>
                <Route path="/tenzies" element={<TenziesPage />}>Tenzies Page</Route>
                <Route path="/quizzical/*" element={<QuizzicalRoutes />} />
                <Route path="/taskify" element={<Taskify />} />
                <Route path="*" element={ <Navigate to="/home" /> } />
            </Routes>
        </>

    )
}

export default App;
