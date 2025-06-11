import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleStravaConnect = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const clientId = import.meta.env.VITE_STRAVA_CLIENT_ID;
      const redirectUri = import.meta.env.VITE_STRAVA_REDIRECT_URI;

      if (!clientId || !redirectUri) {
        throw new Error('Missing required environment variables');
      }

      // Generate and store state
      const state = crypto.randomUUID();
      localStorage.setItem('oauth_state', state);

      const responseType = 'code';
      const approvalPrompt = 'auto';
      const scope = 'activity:write,read';

      const authorizationUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&approval_prompt=${approvalPrompt}&scope=${scope}&state=${state}`;

      window.location.href = authorizationUrl;
    } catch (error) {
      console.error('OAuth initialization failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center p-4'>
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 w-full max-w-md'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <div className='w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center'>
              <TrendingUp className='h-6 w-6 text-blue-900' />
            </div>
            <span className='text-2xl font-bold text-white'>WorkoutMetrics</span>
          </div>
          <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>
          <p className='text-blue-100'>Connect with Strava to access your fitness analytics</p>
        </div>

        <Card className='backdrop-blur-sm bg-white/10 border-white/20'>
          <CardHeader className='text-center'>
            <CardTitle className='text-white'>Get Started</CardTitle>
            <CardDescription className='text-blue-100'>
              First time users will be redirected to Strava's authorization page. Returning users
              will go straight to their dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <Button
              disabled={isLoading}
              onClick={handleStravaConnect}
              className={`w-full bg-white hover:bg-gray-100 text-gray-900 px-6 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border border-gray-200 ${
                isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              size='lg'
            >
              CONNECT WITH STRAVA
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>

            <div className='space-y-3'>
              <div className='flex items-center space-x-3 text-blue-100'>
                <Shield className='h-5 w-5 text-teal-400' />
                <span className='text-sm'>Secure authentication through Strava</span>
              </div>
              <div className='flex items-center space-x-3 text-blue-100'>
                <Zap className='h-5 w-5 text-teal-400' />
                <span className='text-sm'>Instant access to your workout data</span>
              </div>
              <div className='flex items-center space-x-3 text-blue-100'>
                <TrendingUp className='h-5 w-5 text-teal-400' />
                <span className='text-sm'>Advanced analytics and insights</span>
              </div>
            </div>

            <div className='text-center pt-4'>
              <Link to='/' className='text-teal-400 hover:text-teal-300 text-sm transition-colors'>
                ← Back to homepage
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className='text-center mt-6 text-blue-100 text-xs'>
          By connecting, you agree to our{' '}
          <span
            className='cursor-pointer hover:underline'
            onClick={() => navigate('/terms-of-service')}
          >
            Terms of Service
          </span>{' '}
          and{' '}
          <span
            className='cursor-pointer hover:underline'
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
