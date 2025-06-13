import type { NavigateFunction } from 'react-router-dom';

interface CallbackResult {
  success: boolean;
  error?: string;
}

interface StravaTokenResponse {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: {
    id: number;
    firstname: string;
    lastname: string;
    profile: string;
    profile_medium: string;
    city: string;
    state: string;
    country: string;
    sex: string;
    weight: number;
    bio: string;
    premium: boolean;
    summit: boolean;
    badge_type_id: number;
    resource_state: number;
    username: string | null;
    follower: any;
    friend: any;
    created_at: string;
    updated_at: string;
  };
}

export const handleStravaCallback = async (navigate: NavigateFunction): Promise<CallbackResult> => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const returnedState = urlParams.get('state');
    const storedState = localStorage.getItem('oauth_state');

    // Skip state verification if both are null (second mount)
    if (returnedState === null && storedState === null) {
      console.log('Skipping state verification - second mount');
      return { success: true };
    }

    // Verify state
    if (!storedState || !returnedState || returnedState !== storedState) {
      throw new Error('Invalid state parameter - possible CSRF attack');
    }

    // Clean up state
    localStorage.removeItem('oauth_state');

    if (!code) {
      throw new Error('No authorization code received');
    }

    // Exchange the authorization code for tokens
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: import.meta.env.VITE_STRAVA_CLIENT_ID,
        client_secret: import.meta.env.VITE_STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for tokens');
    }

    const data: StravaTokenResponse = await response.json();

    // Save user data to backend/Supabase
    const saveUserResponse = await fetch(import.meta.env.VITE_BACKEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        athlete: data.athlete,
      }),
    });

    if (!saveUserResponse.ok) {
      const errorData = await saveUserResponse.json();
      console.error('Failed to save user data:', errorData);
      throw new Error('Failed to save user data to database');
    }

    return { success: true };
  } catch (err) {
    console.error('Callback error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
    navigate('/login', { state: { error: errorMessage } });
    return { success: false, error: errorMessage };
  }
};
