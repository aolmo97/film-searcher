import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { useFavorites } from "../hooks/useFavorites";
import { SearchForm } from "../components/SearchForm";
import { MovieList } from "../components/MovieList";
import { LoadingIndicator } from "../components/LoadingIndicator";

export default function Search() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    movies,
    query,
    category,
    loading,
    setQuery,
    setCategory,
    fetchMovies,
  } = useMovieSearch();
  const { favorites, toggleFavorite } = useFavorites();

  const handleMoviePress = (movieId: number) => {
    navigation.navigate("MovieDetails", { movieId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movies Search</Text>
      <SearchForm
        query={query}
        category={category}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onSubmit={fetchMovies}
      />
      {loading && movies.length === 0 ? (
        <LoadingIndicator />
      ) : (
        <MovieList
          movies={movies}
          favorites={favorites}
          loading={loading}
          hasMorePages={false}
          onLoadMore={() => {}}
          onPressFavorite={toggleFavorite}
          onPressMovie={handleMoviePress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    color: "#333",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 25,
  },
});
