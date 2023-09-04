import { View } from "../Themed";
import { Image } from "expo-image";
import { StyleSheet, useColorScheme } from 'react-native'
import { Thread } from "../../types";


export const  PostLeftSide = (thread: Thread) => {
    const currentTheme = useColorScheme();
    const borderColor = currentTheme === "light" ? "#3333" : "#9999";
  
    return (
      <View style={styles.container}>
        <Image
          source={thread.author.photo}
          style={styles.image}
          contentFit="cover"
        />
        <View
          style={{
            borderWidth: 1,
            alignSelf: "center",
            borderColor: borderColor,
            flexGrow: 1,
          }}
        />
        <View
          style={{
            width: 20,
            alignItems: "center",
            alignSelf: "center",
            gap: 3,
          }}
        >
          {[1, 2, 3].map((index) => (
            <Image
              key={index}
              source={thread.replies[index - 1]?.author.photo}
              style={{ width: index * 8, height: index * 8, borderRadius: 15 }}
              contentFit="cover"
            />
          ))}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: "space-between",
      marginLeft:-10 
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
  });