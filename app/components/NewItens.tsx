import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import AddItens from "./AddItens";

type Task = {
  id: string;
  text: string;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");

  const addTask = (text: string) => {
    const newTask: Task = { id: Math.random().toString(), text };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, newText: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditingText("");
  };

  return (
    <View style={styles.container}>
      <AddItens addTask={addTask} />

      <FlatList
        style={styles.lista}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            {editingTaskId === item.id ? (
              <>
                <TextInput
                  value={editingText}
                  onChangeText={setEditingText}
                  style={styles.inputEdit}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => {
                    if (!editingText.trim()) return;
                    updateTask(item.id, editingText);
                  }}
                >
                  <Text style={styles.saveText}>Salvar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text style={styles.taskText}>{item.text}</Text>
            )}

            <View style={styles.buttonsRight}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeTask(item.id)}
              >
                <Text style={styles.removeText}>-</Text>
              </TouchableOpacity>

              {editingTaskId !== item.id && (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => {
                    setEditingTaskId(item.id);
                    setEditingText(item.text);
                  }}
                >
                  <Text style={styles.editText}>Editar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  inputEdit: {
    borderWidth: 1,
    borderColor: "#3498db",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
    width: '50%'
  },
  buttonsRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  removeText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#2ecc71",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginLeft: 8,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  editButton: {
    backgroundColor: "#f39c12",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  lista:{
    flex: 1,
    borderWidth: 2,
    borderColor: '#000000',
    height: 'auto',
    maxWidth: '100%',
  }
});
