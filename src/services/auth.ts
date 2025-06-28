export const getStravaActivities = async (userId: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_FETCH_ACTIVITIES}?userId=${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch activities');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};
