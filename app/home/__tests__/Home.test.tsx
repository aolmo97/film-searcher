import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useMovies } from '@/app/hooks/useMovies';
import Home from '..';
import { useFavorites } from '@/app/hooks/useFavorites';
import { useNavigation } from '@react-navigation/native';

// Mockear AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Mockear los hooks
jest.mock('@/app/hooks/useMovies');
jest.mock('@/app/hooks/useFavorites');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('Home Screen', () => {
  const mockUseMovies = useMovies as jest.Mock;
  const mockUseFavorites = useFavorites as jest.Mock;

  beforeEach(() => {
    mockUseMovies.mockReturnValue({
      movies: [],
      loading: false,
      hasMorePages: true,
      loadMoreMovies: jest.fn(),
    });
    mockUseFavorites.mockReturnValue({
      favorites: [],
      toggleFavorite: jest.fn(),
    });
    mockNavigate.mockClear();
  });

  it('Should render the component correctly', () => {
    mockUseMovies.mockReturnValue({
      movies: [{ id: 1, title: 'Inception', vote_average: 8.8 }],
      loading: false,
      hasMorePages: true,
      loadMoreMovies: jest.fn(),
    });
    mockUseFavorites.mockReturnValue({
      favorites: [1],
      toggleFavorite: jest.fn(),
    });

    const { getByText } = render(<Home />);
    expect(getByText('Popular Movies')).toBeTruthy();
    expect(getByText('★ 8.8')).toBeTruthy();
  });

  it('Should render the list of movies when there are movies available', () => {
    const mockMovies = [
      { id: 1, title: 'Inception', vote_average: 8.8 },
      { id: 2, title: 'The Matrix', vote_average: 8.7 },
    ];
    mockUseMovies.mockReturnValue({
      movies: mockMovies,
      loading: false,
      hasMorePages: true,
      loadMoreMovies: jest.fn(),
    });

    const { getByText, getAllByTestId } = render(<Home />);
    expect(getByText('Popular Movies')).toBeTruthy();
    expect(getByText('Inception')).toBeTruthy();
    expect(getByText('The Matrix')).toBeTruthy();
    expect(getAllByTestId('movie-list-item')).toHaveLength(2);
  });

  it('Should navigate to movie details when a movie is selected', () => {
    const mockMovies = [
      { id: 1, title: 'Inception', vote_average: 8.8 },
      { id: 2, title: 'The Matrix', vote_average: 8.7 },
    ];
    mockUseMovies.mockReturnValue({
      movies: mockMovies,
      loading: false,
      hasMorePages: true,
      loadMoreMovies: jest.fn(),
    });

    const { getAllByTestId } = render(<Home />);
    const movieItems = getAllByTestId('movie-list-item');
    
    fireEvent.press(movieItems[0]);

    expect(mockNavigate).toHaveBeenCalledWith('MovieDetails', { movieId: 1 });
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
