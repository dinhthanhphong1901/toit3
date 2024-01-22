import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/FontAwesome";

function Header(props) {
  return (
    <View style={styles.header}>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        <View style={styles.slide}>
          <Image
            source={require("../assets/1.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/2.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/3.jpg")}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flex: 20,
    width: "100%",
    marginBottom: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
    color: "#333",
  },
  searchIconContainer: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});

export default Header;