import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (fullName.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Vui lòng điền đầy đủ thông tin.');
    } else if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp.');
    } else {
      // Thực hiện xác nhận đăng ký ở đây
      alert(`Đăng ký thành công!\nHọ và tên: ${fullName}\nTên đăng nhập: ${username}\nEmail: ${email}`);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background1.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng Ký Tài Khoản</Text>
        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;