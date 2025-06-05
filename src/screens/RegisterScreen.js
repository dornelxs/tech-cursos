import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    try {
      console.log("Iniciando registro...");
      console.log("auth:", auth);
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Conta criado com sucesso!");
      navigation.replace("Main");
    } catch (error) {
      console.error("Erro ao registrar: ", error);
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registre-se!</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity
          onPress={() => setShowPassword((prev) => !prev)}
          style={styles.eyeButton}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <Button title="Cadastrar" onPress={handleRegister} />
      <View style={{ height: 12 }} />
      <Button title="Voltar para o Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    marginBottom: 0,
    padding: 8,
    paddingRight: 40, // espaço para o ícone
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
    marginBottom: 20,
  },
  eyeButton: {
    position: "absolute",
    right: 0,
    top: 2,
    padding: 8,
  },
});

export default RegisterScreen;
