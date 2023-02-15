import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Participant from "../../components/Participant";

export default function Home() {
  const handleAddParticipant = () => {
    alert("clicou");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome do evento</Text>
      <Text style={styles.subTexto}>Quarta, 15 de Fevereiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddParticipant}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
    </View>
  );
}
