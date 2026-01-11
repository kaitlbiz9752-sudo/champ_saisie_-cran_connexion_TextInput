import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '') {
      Alert.alert('Erreur', 'Veuillez saisir votre email.');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Erreur',
        'Le mot de passe doit contenir au moins 6 caractères.'
      );
      return;
    }

    Alert.alert('Succès', `Email saisi : ${email}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome</Text>
      <Text style={styles.regularText}>Login to continue</Text>

      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#999999"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
      />

      <Button title="Se connecter" onPress={handleLogin} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});
