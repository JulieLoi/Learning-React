import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import ReactFactsPage from './Pages/ReactFacts.page';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}>HOME PAGE</Route>
      <Route path="/reactfacts" element={<ReactFactsPage />}>React Facts Page</Route>
      <Route path="*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}

export default App;
