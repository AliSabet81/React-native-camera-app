import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ImageScreen = () => {
  const { name } = useLocalSearchParams<{ name: string }>();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "image" }} />
      <Text>ImageScreen</Text>
      <Link href="/" asChild>
        <MaterialIcons name="home" size={30} color="white" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageScreen;
