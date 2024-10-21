import { useState, useEffect } from 'react';
import { Movie } from '../types/types';
import { searchMovies } from '../services/movieService';

export const useMovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    if (!query && !category) return;
    
    setLoading(true);
    try {
      const fetchedMovies = await searchMovies(query, category);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query, category]);

  return { movies, query, category, loading, setQuery, setCategory, fetchMovies };
};
