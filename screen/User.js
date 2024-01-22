import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

function User(props) {
  const [isEnabledNotification, setEnabledNotification] = useState(false);
  const [isEnabledDarkMode, setEnabledDarkMode] = useState(false);

  const toggleSwitchNotification = () => {
    setEnabledNotification((previousState) => !previousState);
  };

  const toggleSwitchDarkMode = () => {
    setEnabledDarkMode((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hồ sơ Người dùng</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cài đặt tài khoản</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Chỉnh sửa hồ sơ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tuỳ chọn</Text>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Nhận thông báo</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledNotification ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitchNotification}
            value={isEnabledNotification}
          />
        </View>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Chế độ tối</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitchDarkMode}
            value={isEnabledDarkMode}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  preferenceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  preferenceText: {
    fontSize: 16,
  },
});

export default User;