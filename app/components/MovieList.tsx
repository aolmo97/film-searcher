import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { MovieItem } from "./MovieItem";
import { Movie } from "../types/types";

interface MovieListProps {
  movies: Movie[];
  favorites: number[];
  loading: boolean;
  hasMorePages: boolean;
  onLoadMore: () => void;
  onPressFavorite: (id: number) => void;
  onPressMovie: (id: number) => void;
}

export const MovieList: React.FC<MovieListProps> = ({
  movies,
  favorites,
  loading,
  hasMorePages,
  onLoadMore,
  onPressFavorite,
  onPressMovie,
}) => {
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loaderFooter}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <MovieItem
      movie={item}
      isFavorite={favorites.includes(item.id)}
      onPressFavorite={() => onPressFavorite(item.id)}
      onPressMovie={() => onPressMovie(item.id)}
      testID="movie-list-item"
    />
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderMovieItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      onEndReached={hasMorePages ? onLoadMore : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
      testID="movie-list"
    />
  );
};

const { width } = Dimensions.get("window");
const POSTER_WIDTH = (width - 48) / 2;

const styles = StyleSheet.create({
  listContainer: {
    padding: 8,
  },
  loaderFooter: {
    marginTop: 10,
    alignItems: "center",
  },
});
