import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      console.log("autenticando...");
      await signInWithEmailAndPassword(auth, email, password);
      console.log("autenticado!");
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("Erro", "Email ou senha inválido");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Login</Text>

      <TextInput
        placeholder="Digite seu email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
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

      <Button title="Entrar" onPress={handleLogin} />

      <Text style={styles.orText}>Ainda não tem conta?</Text>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate("Register")}
      />

      <Text style={styles.orText}>Ou entre com</Text>

      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="google" size={24} color="white"></AntDesign>
        <Text style={styles.socialText}>Entrar com o Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.githubButton]}>
        <Ionicons name="logo-github" size={24} color="white"></Ionicons>
        <Text style={styles.socialText}>Entrar com o Github</Text>
      </TouchableOpacity>
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
    padding: 8,
    marginBottom: 0,
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
  orText: { marginVertical: 20, fontSize: 16, color: "#555" },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#DB4437",
    borderRadius: 5,
    marginVertical: 5,
  },
  socialText: { color: "white", fontSize: 16, marginLeft: 10 },
  githubButton: { backgroundColor: "#333" },
});

export default LoginScreen;
