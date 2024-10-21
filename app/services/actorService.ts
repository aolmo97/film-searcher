const API_KEY = '6698777765a6dd7621acea6b8aca8ab2';

export const fetchActorDetails = async (actorId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
