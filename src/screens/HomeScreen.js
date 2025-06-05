import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import React, { useCallback, useState, useContext } from "react";
import { deletarCurso, getCursos } from "../services/CursoService";
import { useFocusEffect } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext);

  const carregarCursos = async () => {
    const cursos = await getCursos(user.uid);
    setItems(cursos);
  };

  useFocusEffect(
    useCallback(() => {
      carregarCursos();
    }, [])
  );

  const confirmarExclusao = (id) => {
    // Para web, Alert.alert pode não funcionar como esperado.
    // Usar window.confirm se estiver rodando na web.
    if (typeof window !== "undefined" && window.confirm) {
      const confirmado = window.confirm("Deseja realmente excluir este curso?");
      if (confirmado) {
        deletarCurso(id).then(carregarCursos);
      }
      return;
    }

    // Mobile padrão
    Alert.alert("Confirmar", "Deseja realmente excluir este curso?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          await deletarCurso(id);
          carregarCursos();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>
      <Button
        title="Adicionar Curso"
        onPress={() => navigation.navigate("CursoForm")}
        color="#007bff"
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate("Details", {
                itemID: item.id,
                title: item.name,
                description: item.description,
              })
            }
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => confirmarExclusao(item.id)}
            >
              <Text style={styles.deleteButtonText}>🗑️ Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, marginTop: 40 },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  itemTitle: { fontSize: 18, fontWeight: "bold" },
  itemDescription: { fontSize: 14, color: "#555" },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "#d9534f",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
