import React, { useRef, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Animated } from 'react-native';

export default function HomeScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current; // Start fully transparent

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fully visible
      duration: 2000, // 1 second
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (

   

    <ScrollView contentContainerStyle={styles.container}>
  <Animated.View style={{ opacity: fadeAnim }}>
    <Text style={styles.bannerText}>Who do you want to talk to?</Text>

    <View style={styles.row}>
      <View style={styles.block} />
      <View style={[styles.block, styles.blockRight]} />
    </View>
  </Animated.View>
</ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  
  bannerText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif',
      default: 'System',
    }),
  },
  block: {
    paddingVertical: 24,
    paddingHorizontal: 13,
    borderRadius: 30,
    shadowColor: '#000',

    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,

    marginBottom: 40,
    height: 400,

    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 2,

    width: 500,
    marginTop: 50,
    marginLeft: 206,
    marginRight: 20,
  },

  row: {
    flexDirection: 'row',
    // no justifyContent so first block keeps its exact spot
  },

  blockRight: {
    marginLeft: 20, // pushes second box to the right
  },
});
