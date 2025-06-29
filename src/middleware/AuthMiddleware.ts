import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAuthMiddleware = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Skip auth check for public routes
    if (
      location.pathname === '/' ||
      location.pathname === '/login' ||
      location.pathname.startsWith('/auth/strava') ||
      location.pathname === '/downloading-activities'
    ) {
      return;
    }

    const verifySession = async () => {
      try {
        const response = await fetch('/api/auth/verify-session', {
          credentials: 'include',
        });

        if (!response.ok) {
          navigate('/login', {
            state: { from: location.pathname },
          });
        }
      } catch (error) {
        navigate('/login', {
          state: { from: location.pathname },
        });
      }
    };

    verifySession();
  }, [navigate, location]);
};
