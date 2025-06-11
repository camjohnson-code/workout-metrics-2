import type { NavigateFunction } from 'react-router-dom';

interface CallbackResult {
  success: boolean;
  error?: string;
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

    // TODO: When backend is ready, implement token exchange
    // const response = await fetch('/api/auth/strava/callback', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ code })
    // });
    // const data = await response.json();

    // For now, just return success
    return { success: true };
  } catch (err) {
    console.error('Callback error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
    navigate('/login', { state: { error: errorMessage } });
    return { success: false, error: errorMessage };
  }
};
