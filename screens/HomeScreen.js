import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { firstfonction, secondfonction } from "../reducers/user";


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(firstfonction({token: "..."}));
    navigation.navigate("Login");
  };
  

  dispatch(secondfonction())
  

  return (
    <View>
      <TouchableOpacity onPress={() => handleClick()}>
        <Text style={styles.button}>
          Bienvenue (cliquer sur moi)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: "50%",
  },
});
