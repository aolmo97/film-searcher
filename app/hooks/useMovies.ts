import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../services/movieService';
import { Movie } from '../types/types';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);

  const loadMovies = async (pageToFetch: number) => {
    try {
      const { movies: newMovies, page: currentPage, totalPages } = await fetchPopularMovies(pageToFetch);
      
      if (pageToFetch === 1) {
        setMovies(newMovies);
      } else {
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
      }

      setHasMorePages(currentPage < totalPages);
      setPage(currentPage);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(1);
  }, []);

  const loadMoreMovies = () => {
    if (hasMorePages && !loading) {
      loadMovies(page + 1);
    }
  };

  return { movies, loading, hasMorePages, loadMoreMovies };
};
