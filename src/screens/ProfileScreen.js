import { View, Text, Button } from "react-native";
import React from "react";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        👤 Meu Perfil
      </Text>
      <Text>Nome: Christoff Dornelas</Text>
      <Text style={{ marginBottom: 10 }}>Email: dornelas@gmail.com</Text>
      <Button title="Sair" onPress={() => navigation.replace("Login")} />
    </View>
  );
};

export default ProfileScreen;
