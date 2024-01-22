import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

function Setting(props) {
  const [isEnabledLockApp, setEnabledLockApp] = useState(true);
  const [isEnabledChangePassword, setEnabledChangePassword] = useState(true);
  const [isUseFingerprint, setUseFingerprint] = useState(true);
  const [isEnabledNotifications, setEnabledNotifications] = useState(true);
  const [isEnabledDarkMode, setEnabledDarkMode] = useState(false);
  const [isEnabledOfflineMode, setEnabledOfflineMode] = useState(false);
  const [isEnabledAnalytics, setEnabledAnalytics] = useState(true);
  const [isEnabledTouchID, setEnabledTouchID] = useState(true);
  const [isEnabledAutoUpdate, setEnabledAutoUpdate] = useState(false);
  const [isEnabledLocation, setEnabledLocation] = useState(true);

  const toggleSwitch = (stateSetter) => {
    stateSetter((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cài Đặt</Text>

      {renderSettingItem("Khóa Ứng Dụng", isEnabledLockApp, setEnabledLockApp)}
      {renderSettingItem("Thay Đổi Mật Khẩu", isEnabledChangePassword, setEnabledChangePassword)}
      {renderSettingItem("Sử Dụng Vân Tay", isUseFingerprint, setUseFingerprint)}
      {renderSettingItem("Thông Báo", isEnabledNotifications, setEnabledNotifications)}
      {renderSettingItem("Chế Độ Tối", isEnabledDarkMode, setEnabledDarkMode)}
      {renderSettingItem("Chế Độ Ngoại Tuyến", isEnabledOfflineMode, setEnabledOfflineMode)}
      {renderSettingItem("Phân Tích Dữ Liệu", isEnabledAnalytics, setEnabledAnalytics)}
      {renderSettingItem("Sử Dụng Touch ID", isEnabledTouchID, setEnabledTouchID)}
      {renderSettingItem("Tự Động Cập Nhật", isEnabledAutoUpdate, setEnabledAutoUpdate)}
      {renderSettingItem("Vị Trí", isEnabledLocation, setEnabledLocation)}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Lưu Cài Đặt</Text>
      </TouchableOpacity>
    </View>
  );
}

const renderSettingItem = (label, isEnabled, stateSetter) => (
  <View style={styles.settingItem} key={label}>
    <Icon name="cog" size={24} color="#3498db" style={styles.icon} />
    <Text style={styles.settingText}>{label}</Text>
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#3498db" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => toggleSwitch(() => stateSetter)}
      value={isEnabled}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  settingText: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Setting;