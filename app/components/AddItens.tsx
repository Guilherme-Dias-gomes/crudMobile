import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type Task = {
  id: string;
  text: string;
};

type Props = {
  addTask: (text: string) => void;
};

export default function AddItens({ addTask }: Props) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (!taskText) return;
    addTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="EX: fazer projeto PWI"
        value={taskText}
        onChangeText={setTaskText}
        style={styles.input}
      />
      <Button title="Adicionar" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    padding: 8,
    borderRadius: 8,
  },
});
