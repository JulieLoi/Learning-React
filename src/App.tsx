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
import TaskifyPage from './Pages/Taskify.page';

import logo from './assets/logo192.png';


function App() {
    let navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <div className="home-container" onClick={() => navigate("/Learning-React/home")}>
                    <AiOutlineHome 
                        className="icon"
                    />
                    <span className="home-text">Home</span>
                </div>
                <div className="react__container">
                    <img src={logo} alt="react logo" className="react__logo" />
                    <span className="react__text">Learning React</span>
                </div>
                <div className="home-container invisible" onClick={() => navigate("/Learning-React/home")}>
                    <AiOutlineHome 
                        className="icon"
                    />
                    <span className="home-text">Home</span>
                </div>
            </div>

            <Routes>
                <Route path="Learning-React/home" element={<HomePage />}>Home Page</Route>
                <Route path="Learning-React/react-facts" element={<ReactFactsPage />}>React Facts Page</Route>
                <Route path="Learning-React/digital-business-card" element={<DigitalBusinessCardPage />}>Digital Business Card Page</Route>
                <Route path="Learning-React/jokes-puns" element={<JokesPage />}>Jokes Page</Route>
                <Route path="Learning-React/airbnb-experiences" element={<AirBnbExperiencePage />}>AirBnb Page</Route>
                <Route path="Learning-React/travel-journal" element={<TravelJournalPage />}>Travel Journal Page</Route>
                <Route path="Learning-React/meme-generator" element={<MemeGeneratorPage />}>Meme Generator Page</Route>
                <Route path="Learning-React/notes-app" element={<NotesAppPage />}>Notes App Page</Route>
                <Route path="Learning-React/tenzies" element={<TenziesPage />}>Tenzies Page</Route>
                <Route path="Learning-React/quizzical/*" element={<QuizzicalRoutes />} />
                <Route path="Learning-React/taskify" element={<TaskifyPage />} />
                <Route path="learning-react/*" element={ <Navigate to="home" /> } />
            </Routes>
        </>
        //                

    )
}

export default App;
