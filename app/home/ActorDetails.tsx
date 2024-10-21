import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useActorDetails } from '../hooks/useActorDetails';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorMessage } from '../components/ErrorMessage';
import { ActorInfo } from '../components/ActorInfo';
import { RootStackParamList } from '../types/types';

type ActorDetailsRouteProp = RouteProp<RootStackParamList, 'ActorDetails'>;

export default function ActorDetails() {
  const route = useRoute<ActorDetailsRouteProp>();
  const { actorId } = route.params;
  const { actor, loading, error } = useActorDetails(actorId);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!actor) {
    return <ErrorMessage message="No actor details available" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://via.placeholder.com/500x750.png?text=No+Image'
        }}
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <ActorInfo actor={actor} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032541',
  },
  profileImage: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
});
