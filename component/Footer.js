import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function Footer(props) {
  const navigation = useNavigation();

  const goToUserScreen = () => {
    navigation.navigate("User");
  };

  const goTosettingScreen = () => {
    navigation.navigate("setting");
  };
  const goToCartScreen = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="home" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToCartScreen}>
        <Icon name="cart-plus" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToUserScreen}>
        <Icon name="user" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goTosettingScreen}>
        <Icon name="cog" size={30} color="white" /> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "100%",
    flex: 10,
    backgroundColor: "#3498db",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
  },
});

export default Footer;