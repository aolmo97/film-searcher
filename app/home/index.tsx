import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { useMovies } from "../hooks/useMovies";
import { useFavorites } from "../hooks/useFavorites";
import { RootStackParamList } from "../types/types";
import { MovieList } from "../components/MovieList";
import { ErrorMessage } from "../components/ErrorMessage";

export default function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { movies, loading, hasMorePages, loadMoreMovies } = useMovies();
  const { favorites, toggleFavorite } = useFavorites();

  const handlePressMovie = (movieId: number) => {
    navigation.navigate("MovieDetails", { movieId });
  };

  if (loading && movies.length === 0) {
    return <LoadingIndicator />;
  }
  if (!movies) {
    return <ErrorMessage message="No movies available" />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Movies</Text>
      <MovieList
        movies={movies}
        favorites={favorites}
        loading={loading}
        hasMorePages={hasMorePages}
        onLoadMore={loadMoreMovies}
        onPressFavorite={toggleFavorite}
        onPressMovie={handlePressMovie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    color: "#333",
  },
});
