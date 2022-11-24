import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function LoginScreen() {
  const user = useSelector((state) => state.user.value);

  console.log('console.log de user, on peut voir que les "..." sont bien ajouté à token dans le store',user);

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
