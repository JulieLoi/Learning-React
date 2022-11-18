import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import ReactFactsPage from './Pages/ReactFacts.page';
import DigitalBusinessCardPage from './Pages/DigitalBusinessCard.page';
import JokesPage from './Pages/Jokes.page';
import AirBnbExperiencePage from './Pages/AirBnbExperience.page';


import 'bootstrap/dist/css/bootstrap.min.css';
import TravelJournalPage from './Pages/TravelJournal.page';
import MemeGeneratorPage from './Pages/MemeGenerator.page';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}>HOME PAGE</Route>
      <Route path="/reactfacts" element={<ReactFactsPage />}>React Facts Page</Route>
      <Route path="/digitalbusinesscard" element={<DigitalBusinessCardPage />}>Digital Business Card Page</Route>
      <Route path="/jokes" element={<JokesPage />}>Jokes Page</Route>
      <Route path="/airbnb" element={<AirBnbExperiencePage />}>AirBnb Page</Route>
      <Route path="/traveljournal" element={<TravelJournalPage />}>Travel Journal Page</Route>
      <Route path="/memegenerator" element={<MemeGeneratorPage />}>Meme Generator</Route>
      <Route path="*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}

export default App;
