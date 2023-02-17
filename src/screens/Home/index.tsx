import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

import Participant from "../../components/Participant";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState("");

  const handleAddParticipant = () => {
    const data = participants ? [...participants, name] : [name];
    setParticipants(data);
    setName('')
  };

  const handleNameInputChange = (text: string) => {
    setName(text)
  }

  const removeParticipant = () => {
    console.log("removeu");
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
          value={name}
          onChangeText={handleNameInputChange}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAddParticipant}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {participants.map((item, index) => (
      <Participant key={index} name={item} onRemove={removeParticipant} />
      ))}
      </ScrollView>
    </View>
  );
}
