import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CameraScreen</Text>
      <Link href="/" asChild>
        {/* <Pressable style={styles.floatingButton}> */}
        <MaterialIcons name="home" size={30} color="white" />
        {/* </Pressable>{" "} */}
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

export default CameraScreen;
