import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, BarChart3 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { getStravaActivities } from '@/services/auth';

interface LoadingPageProps {
  message?: string;
}

const DownloadingStravaActivities = ({
  message = 'Fetching your activities from Strava...',
}: LoadingPageProps) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const auth = searchParams.get('auth');
  const userId = searchParams.get('id');

  const [currentMessage, setCurrentMessage] = useState(message);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      if (auth === 'success' && userId) {
        try {
          const activities = await getStravaActivities(userId);

          if (
            activities &&
            activities.status === 'success' &&
            Array.isArray(activities.activities) &&
            activities.activities.length > 0
          ) {
            navigate('/dashboard');
          } else {
            setError('Error getting activities from Strava. Please try again later.');
          }
        } catch (error) {
          setError('Failed to fetch activities');
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, [auth, userId, navigate]);

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-white'>
        <div className='text-center space-y-6 p-8'>
          <div className='flex items-center justify-center space-x-3 mb-6'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <BarChart3 className='h-6 w-6 text-white' />
            </div>
            <span className='text-2xl font-bold text-gray-800'>WorkoutMetrics</span>
          </div>

          <div className='text-red-600 font-medium'>{error}</div>

          <button
            onClick={() => navigate('/login')}
            className='cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='text-center space-y-6 p-8'>
        <div className='flex items-center justify-center space-x-3 mb-6'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
            <BarChart3 className='h-6 w-6 text-white' />
          </div>
          <span className='text-2xl font-bold text-gray-800'>WorkoutMetrics</span>
        </div>

        <div className='flex items-center justify-center space-x-3'>
          {isLoading && <Loader2 className='h-8 w-8 animate-spin text-blue-600' />}
          <span className='text-lg font-medium text-gray-700'>{currentMessage}</span>
        </div>

        <div className='space-y-2 text-sm text-gray-600 max-w-md'>
          <p>
            We're securely connecting to your Strava account and retrieving your latest workout
            data.
          </p>
          <p>This may take a few moments depending on your activity history.</p>
        </div>

        {isLoading && (
          <div className='flex justify-center'>
            <div className='flex space-x-1'>
              <div className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'></div>
              <div
                className='w-2 h-2 bg-purple-600 rounded-full animate-pulse'
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadingStravaActivities;
