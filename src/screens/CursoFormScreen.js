import { View, Text } from "react-native";
import { React, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const CursoFormScreen = (route, navigation) => {
  const itemID = route.params?.itemID;
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    if (itemID) {
      const buscarCurso = async () => {
        const docRef = doc(db, "Cursos", itemID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          setNome(docSnap.data().nome);
          setDescricao(docSnap.data().descricao);
          setEditando(true);
        }
      };
      buscarCurso;
    }
  }, [itemID]);

  return (
    <View>
      <Text>CursoFormScreen</Text>
    </View>
  );
};

export default CursoFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
});
