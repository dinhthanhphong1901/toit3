import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Footer } from '../component';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'phong' && password === '123') {
      navigation.navigate('MyTab');
    } else {
      alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
  };

  const handleRegister = () => {
    // Điều hướng đến màn hình đăng ký, thay 'Register' bằng tên màn hình đăng ký thực tế
    navigation.navigate('RegisterScreen');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Chào mừng bạn đến với chúng tôi</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegister}>
          <Text style={[styles.buttonText, styles.registerButtonText]}>Đăng Ký</Text>
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
  registerButton: {
    backgroundColor: 'red',
    marginBottom: 0, // Đặt lại margin để nút Đăng ký không có khoảng cách với nút Đăng nhập
  },
  registerButtonText: {
    color: '#fff',
  },
});

export default LoginScreen;