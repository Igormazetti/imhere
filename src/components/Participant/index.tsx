import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.removeBtn} onPress={onRemove}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
