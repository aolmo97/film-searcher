const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const fetchActorDetails = async (actorId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
