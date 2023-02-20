import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

import Participant from "../../components/Participant";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState("");

  const handleAddParticipant = () => {
    if (participants.includes(name)) {
      return Alert.alert(
        "Participante Existente",
        "Participante já está na lista!"
      );
    }
    const data = participants ? [...participants, name] : [name];
    setParticipants(data);
    setName("");
  };

  const handleNameInputChange = (text: string) => {
    setName(text);
  };

  const removeParticipant = (name: string) => {
    Alert.alert("Remover participante", `Deseja remover ${name} da lista?`, [
      {
        text: "Sim",
        onPress: () => {
          const deleted = participants.filter((item) => item !== name);
          setParticipants(deleted);
          Alert.alert("Participante removido.");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            name={item}
            onRemove={() => removeParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>
            Ainda não há participantes cadastrados!
          </Text>
        )}
      />
    </View>
  );
}
