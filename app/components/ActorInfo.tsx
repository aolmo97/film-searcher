import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ActorDetail } from '../types/types';

interface ActorInfoProps {
  actor: ActorDetail;
}

export const ActorInfo: React.FC<ActorInfoProps> = ({ actor }) => (
  <>
    <Text style={styles.name}>{actor.name}</Text>
    <Text style={styles.infoText}>Born: {actor.birthday}</Text>
    <Text style={styles.infoText}>Place of Birth: {actor.place_of_birth}</Text>
    <Text style={styles.biographyTitle}>Biography</Text>
    <Text style={styles.biography}>{actor.biography}</Text>
  </>
);

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  biographyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  biography: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
});
