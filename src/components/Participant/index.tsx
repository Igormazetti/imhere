import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Igor Mazetti</Text>
      <TouchableOpacity style={styles.removeBtn}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
