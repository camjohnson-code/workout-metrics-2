import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthMiddleware } from './middleware/AuthMiddleware';
import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';
import Callback from './pages/auth/strava/Callback';
import Dashboard from './pages/dashboard/Dashboard';
import Analytics from './pages/dashboard/Analytics';
import Charts from './pages/dashboard/Charts';
import Heatmaps from './pages/dashboard/Heatmaps';
import Settings from './pages/dashboard/Settings';
import DownloadingStravaActivities from './pages/auth/strava/DownloadingStravaActivities';

function AppContent() {
  useAuthMiddleware();

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/auth/strava/callback' element={<Callback />} />
      <Route path='/downloading-activities' element={<DownloadingStravaActivities />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/analytics' element={<Analytics />} />
      <Route path='/dashboard/charts' element={<Charts />} />
      <Route path='/dashboard/heatmaps' element={<Heatmaps />} />
      <Route path='/dashboard/settings' element={<Settings />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
