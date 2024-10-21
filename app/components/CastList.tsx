import React from 'react';
import { Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { CastMember, RootStackParamList } from '../types/types';

interface CastListProps {
  cast: CastMember[];
  navigation: StackNavigationProp<RootStackParamList, "MovieDetails">;
}

export const CastList: React.FC<CastListProps> = ({ cast, navigation }) => {
  const renderCastMember = ({ item }: { item: CastMember }) => (
    <TouchableOpacity 
      style={styles.castMember}
      onPress={() => navigation.navigate("ActorDetails", { actorId: item.id })}
    >
      <Image
        source={{
          uri: item.profile_path
            ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
            : 'https://via.placeholder.com/185x278.png?text=No+Image'
        }}
        style={styles.castImage}
      />
      <Text style={styles.castName}>{item.name}</Text>
      <Text style={styles.castCharacter}>{item.character}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={styles.sectionTitle}>Top Cast</Text>
      <FlatList
        data={cast}
        renderItem={renderCastMember}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.castList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  castList: {
    marginBottom: 20,
  },
  castMember: {
    marginRight: 15,
    alignItems: 'center',
    width: 100,
  },
  castImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  castName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  castCharacter: {
    fontSize: 12,
    color: '#a7a7a7',
    textAlign: 'center',
  },
});
