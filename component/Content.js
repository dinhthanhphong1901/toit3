import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View, Text, Image, TextInput } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
function Content() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  return (
    <View style={{ width: '100%', backgroundColor: 'white', flex: 70 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginStart: 10,
            paddingLeft: 10,
          }}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      
      <FlatList
        keyExtractor={(item) => item.title}
        numColumns={1}
        data={searchText ? filteredProducts : products}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('productDetail', {
                name: item.title,
                url: item.image,
                price: item.price,
              })
            }
            style={{
              flex: 1,
              marginLeft: index % 2 == 0 ? 8 : 2,
              marginTop: 5,
              marginRight: index % 2 == 0 ? 2 : 8,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'black',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  margin: 10,
                  resizeMode: 'cover',
                }}
              />
              <Text style={{ color: 'red', marginStart: 10 }}>
                ${item.price}
              </Text>
            </View>
            <Text style={{ color: 'black' }}>{item.title}</Text>
            <View style={{ flex: 1 }}>
              <View style={{ height: 30 }}></View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Content;