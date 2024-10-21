import React from "react";
import { View,Image, StyleSheet, ScrollView } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorMessage } from '../components/ErrorMessage';
import { MovieInfo } from '../components/MovieInfo';
import { CastList } from '../components/CastList';
import { RootStackParamList } from '../types/types';

type MovieDetailsRouteProp = RouteProp<RootStackParamList, "MovieDetails">;
type MovieDetailsNavigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">;

export default function MovieDetails() {
  const route = useRoute<MovieDetailsRouteProp>();
  const { movieId } = route.params;
  const navigation = useNavigation<MovieDetailsNavigationProp>();
  const { movie, cast, loading, error } = useMovieDetails(movieId);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!movie) {
    return <ErrorMessage message="No movie details available" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.posterImage}
      />
      <View style={styles.infoContainer}>
        <MovieInfo movie={movie} />
        <CastList cast={cast} navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032541',
  },
  posterImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
});
