import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MovieDetail } from '../types/types';

interface MovieInfoProps {
  movie: MovieDetail;
}

export const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => (
  <>
    <Text style={styles.title}>{movie.title}</Text>
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>{movie.vote_average.toFixed(1)}</Text>
      <Text style={styles.ratingLabel}>User Score</Text>
    </View>
    <Text style={styles.releaseDate}>{movie.release_date}</Text>
    <Text style={styles.overviewLabel}>Overview</Text>
    <Text style={styles.overview}>{movie.overview}</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#21d07a',
    backgroundColor: '#204529',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 10,
  },
  ratingLabel: {
    fontSize: 16,
    color: 'white',
  },
  releaseDate: {
    fontSize: 14,
    color: '#a7a7a7',
    marginBottom: 20,
  },
  overviewLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
});
