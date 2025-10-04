import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      {/* El spinner circular */}
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centrado vertical
    alignItems: 'center',      // Centrado horizontal
    backgroundColor: 'white',  // Fondo blanco para que se vea bien
  },
});

export default LoadingSpinner;