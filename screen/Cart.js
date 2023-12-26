import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';

function Cart({ route, navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (route.params && route.params.name) {
      const { name, url, price, quantity } = route.params;
      const newItem = { name, url, price, quantity };
      setCartItems([...cartItems, newItem]);
    }
  }, [route.params]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const increaseQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = Math.max(1, newCartItems[index].quantity - 1);
    setCartItems(newCartItems);
  };

  const handleCheckout = () => {
    // Xử lý thanh toán ở đây, ví dụ hiển thị thông báo và xóa giỏ hàng
    Alert.alert('Payment Successful', `Total Amount: $${calculateTotal()}`, [
      { text: 'OK', onPress: () => setCartItems([]) },
    ]);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Cart</Text>
        </View>
        <View style={{ flex: 5 }}>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <TouchableOpacity onPress={() => removeFromCart(index)}>
                  <Text style={{ color: 'red', textAlign: 'right' }}>X</Text>
                </TouchableOpacity>
                <Image source={{ uri: item.url }} style={{ width: 50, height: 50 }} />
                <Text>{item.name}</Text>
                <Text>Price: ${item.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                    <Text style={{ color: 'blue' }}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginHorizontal: 5 }}
                    value={item.quantity.toString()}
                    onChangeText={(newQuantity) => updateQuantity(index, parseInt(newQuantity))}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity onPress={() => increaseQuantity(index)}>
                    <Text style={{ color: 'blue' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>
            Total: ${calculateTotal()}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={handleCheckout}
            style={{
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderRadius: 15,
              height: 30,
              marginHorizontal: 50,
            }}
          >
            <Text style={{
              color: 'white',
            }}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Cart;