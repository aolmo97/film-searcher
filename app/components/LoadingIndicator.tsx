import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingIndicator: React.FC = () => (
  <View style={styles.container} testID="loading-indicator">
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
