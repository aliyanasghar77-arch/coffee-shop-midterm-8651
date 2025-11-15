import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [menu, setMenu] = useState([]);
  const [message, setMessage] = useState('');

  // Update your backend URL here
  const API_URL = 'http://localhost:3000'; // Android emulator, use localhost for iOS/web, your IP for real device

  // Placeholder images for categories
  const images = {
    'Hot Drinks': 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
    'Cold Drinks': 'https://images.unsplash.com/photo-1590080879391-3aa3d07cb5f1?auto=format&fit=crop&w=400&q=80',
    Pastries: 'https://images.unsplash.com/photo-1603052875376-147f3c33d1d0?auto=format&fit=crop&w=400&q=80',
    default: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
  };

  const getFullMenu = async () => {
    try {
      setMessage('Loading full menu...');
      const res = await axios.get(`${API_URL}/menu`);
      if (res.data.success) {
        setMenu(res.data.data);
        setMessage('');
      } else {
        setMessage('Failed to fetch menu');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error fetching menu');
    }
  };

  const getRandomItem = async () => {
    try {
      setMessage('Loading a random item...');
      const res = await axios.get(`${API_URL}/menu/random`);
      if (res.data.success) {
        setMenu([res.data.data]);
        setMessage('');
      } else {
        setMessage('No items found');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error fetching random item');
    }
  };

  const getCardColor = (category, inStock) => {
    if (!inStock) return '#f8d7da'; // red for out of stock
    switch (category) {
      case 'Hot Drinks':
        return '#fff3e0'; // light orange
      case 'Cold Drinks':
        return '#e0f7fa'; // light blue
      case 'Pastries':
        return '#f3e5f5'; // light purple
      default:
        return '#fff';
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: getCardColor(item.category, item.inStock) }]}>
      <Image
        source={{ uri: images[item.category] || images.default }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemPrice}>Rs. {item.price}</Text>
        <Text style={[styles.stock, item.inStock ? styles.inStock : styles.outOfStock]}>
          {item.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>☕ Coffee Shop</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={getFullMenu}>
          <Text style={styles.buttonText}>Full Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={getRandomItem}>
          <Text style={styles.buttonText}>Surprise Me</Text>
        </TouchableOpacity>
      </View>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <FlatList
        data={menu}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6b4f4f',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6b4f4f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
    color: '#555',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
  },
  image: {
    width: windowWidth - 30,
    height: 180,
  },
  textContainer: {
    padding: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4b2e2e',
  },
  itemCategory: {
    fontSize: 14,
    color: '#6b4f4f',
    marginVertical: 2,
  },
  itemPrice: {
    fontSize: 16,
    color: '#8b5e3c',
    marginVertical: 2,
  },
  stock: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  inStock: { color: '#198754' },
  outOfStock: { color: '#842029' },
});
