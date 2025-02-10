import * as FileSystem from "expo-file-system";
import { Link, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { StyleSheet, View, Pressable, FlatList, Image } from "react-native";

type Media = {
  name: string;
  uri: string;
};

const HomeScreen = () => {
  const [images, setImages] = useState<Media[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadFiles();
    }, [])
  );

  const loadFiles = async () => {
    if (!FileSystem.documentDirectory) {
      return;
    }

    const res = await FileSystem.readDirectoryAsync(
      FileSystem.documentDirectory
    );

    setImages(
      res.map((file) => ({
        name: file,
        uri: FileSystem.documentDirectory + file,
      }))
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={3}
        contentContainerStyle={{ gap: 1 }}
        columnWrapperStyle={{ gap: 1 }}
        renderItem={({ item }) => (
          <Link href={`/${item.name}`} asChild>
            <Pressable style={{ flex: 1, maxWidth: "33.33%" }}>
              <Image
                source={{ uri: item.uri }}
                style={{ aspectRatio: 3 / 4, borderRadius: 5 }}
              />
            </Pressable>
          </Link>
        )}
      />
      <Link href="/camera" asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color="white" />
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "royalblue",
    padding: 15,
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default HomeScreen;
