import { useState, useEffect } from 'react';
import { fetchMovieDetails, fetchMovieCredits } from '../services/movieService';
import { MovieDetail, CastMember } from '../types/types';

export const useMovieDetails = (movieId: number) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movieId) {
        setError("Movie ID is undefined");
        setLoading(false);
        return;
      }

      try {
        const [movieData, creditsData] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieCredits(movieId)
        ]);

        setMovie(movieData);
        setCast(creditsData.cast.slice(0, 10));
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  return { movie, cast, loading, error };
};
