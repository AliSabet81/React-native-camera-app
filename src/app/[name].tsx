import React from "react";
import * as FileSystem from "expo-file-system";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";

const ImageScreen = () => {
  const { name } = useLocalSearchParams<{ name: string }>();

  const fullUri = (FileSystem.documentDirectory || "") + (name || "");

  const onDelete = async () => {
    await FileSystem.deleteAsync(fullUri);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Image",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialIcons
                onPress={onDelete}
                name="delete"
                size={26}
                color="crimson"
              />
              <MaterialIcons
                onPress={() => {}}
                name="save"
                size={26}
                color="dimgray"
              />
            </View>
          ),
        }}
      />
      <Image
        source={{ uri: fullUri }}
        style={{ width: "100%", height: "100%" }}
      />
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
