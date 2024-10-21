import { Movie } from "../types/types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const fetchPopularMovies = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
  );
  const data = await response.json();

  return {
    movies: data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      vote_average: movie.vote_average,
    })),
    page: data.page,
    totalPages: data.total_pages,
  };
};

export const fetchMovieDetails = async (movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchMovieCredits = async (movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const searchMovies = async (query: string, category: string): Promise<Movie[]> => {
  let url;

  if (category) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${category}`;
    if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image',
    vote_average: movie.vote_average
  }));
};
