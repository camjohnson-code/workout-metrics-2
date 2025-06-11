import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleStravaCallback } from '../../../services/auth';

const Callback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const hasProcessed = useRef(false);

  useEffect(() => {
    const processCallback = async () => {
      if (hasProcessed.current) return;
      hasProcessed.current = true;

      const result = await handleStravaCallback(navigate);

      if (!result.success) {
        setError(result.error || 'Authentication failed');
        return;
      }

      // If successful, redirect to dashboard
      navigate('/dashboard');
    };

    processCallback();
  }, [navigate]);

  if (error) {
    return <div className='text-red-500'>Error: {error}</div>;
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Processing authentication...</h2>
        <p className='text-gray-600'>Please wait while we complete your login.</p>
      </div>
    </div>
  );
};

export default Callback;
