import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Movie } from '../types/types';

interface MovieItemProps {
  movie: Movie;
  testID: string;
  isFavorite: boolean;
  onPressFavorite: () => void;
  onPressMovie: () => void;
}

export const MovieItem: React.FC<MovieItemProps> = ({ movie, testID, isFavorite, onPressFavorite, onPressMovie }) => (
  <TouchableOpacity style={styles.movieItem} onPress={onPressMovie} testID={testID}>
    <Image source={{ uri: movie.poster_path }} style={styles.poster} resizeMode="cover" />
    <View style={styles.movieInfo}>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {movie.title}
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★ {movie.vote_average.toFixed(1)}</Text>
        <TouchableOpacity onPress={onPressFavorite} style={styles.favoriteButton}>
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? "red" : "gray"} 
          />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);
const { width } = Dimensions.get("window");
const POSTER_WIDTH = (width - 48) / 2;

const styles = StyleSheet.create({
  movieItem: {
    width: POSTER_WIDTH,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  poster: {
    width: '100%',
    height: POSTER_WIDTH * 1.5,
  },
  movieInfo: {
    padding: 8,
    height: 60,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#f5c518",
    fontSize: 12,
    fontWeight: "bold",
  },
  favoriteButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
