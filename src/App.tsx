import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';
import Callback from './pages/auth/strava/Callback';
import Dashboard from './pages/dashboard/Dashboard';
import Analytics from './pages/dashboard/Analytics';
import Charts from './pages/dashboard/Charts';
import Heatmaps from './pages/dashboard/Heatmaps';
import Settings from './pages/dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth/strava/callback' element={<Callback />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/analytics' element={<Analytics />} />
        <Route path='/dashboard/charts' element={<Charts />} />
        <Route path='/dashboard/heatmaps' element={<Heatmaps />} />
        <Route path='/dashboard/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
