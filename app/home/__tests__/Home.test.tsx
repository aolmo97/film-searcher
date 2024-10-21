import React from 'react';
import { render } from '@testing-library/react-native';
import { useMovies } from '@/app/hooks/useMovies';
import Home from '..';
import { useFavorites } from '@/app/hooks/useFavorites';

// Mockear AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Mockear los hooks
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));
jest.mock('@/app/hooks/useMovies');
jest.mock('@/app/hooks/useFavorites');

describe('Home Screen', () => {
  it('Should render the component correctly', () => {
    (useMovies as jest.Mock).mockReturnValue({
      movies: [{ id: 1, title: 'Inception', vote_average: 8.8 }],
      loading: false,
      hasMorePages: true,
      loadMoreMovies: jest.fn(),
    });
    (useFavorites as jest.Mock).mockReturnValue({
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
    (useMovies as jest.Mock).mockReturnValue({
      movies: mockMovies,
      loading: false,
      hasMorePages: true,
      loadMoreMovies: jest.fn(),
    });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleFavorite: jest.fn(),
    });

    const { getByText, getAllByTestId } = render(<Home />);
    expect(getByText('Popular Movies')).toBeTruthy();
    expect(getByText('Inception')).toBeTruthy();
    expect(getByText('The Matrix')).toBeTruthy();
    expect(getAllByTestId('movie-list-item')).toHaveLength(2);
  });

});
