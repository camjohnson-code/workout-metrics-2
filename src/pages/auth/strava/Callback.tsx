import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      fetch(`/api/auth/callback?code=${code}&state=${state}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            navigate('/dashboard');
          } else {
            setError(data.error);
          }
        });
    }
  }, []);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Processing authentication...</h2>
        {!error && <p className='text-gray-600'>Please wait while we complete your login.</p>}
        {error && <p className='text-red-500'>Error: {error}</p>}
      </div>
    </div>
  );
};

export default Callback;
