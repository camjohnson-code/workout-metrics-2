import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';
import Callback from './pages/auth/strava/Callback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth/strava/callback' element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
