import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import TabBar from '../components/TabBar';
import { signUp, signIn } from '../components/authservice'; // authservice.js dosyasından import edildi

const ProfilPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleSignInPress = () => {
    setModalVisible(true);
  };

  const handleConfirmPress = () => {
    // Burada Firebase'e doğrulama yapılabilir
    // Eğer doğrulama başarılıysa confirmVisible'ı true yaparak diğer modal'ı açabilirsiniz
    if (email === 'deneme@gmail.com' && password === '123456') {
      setConfirmVisible(true);
    } else {
      alert('Hatalı email veya şifre');
      setConfirmVisible(false);
    }
  };

  const handleSavePress = () => {
    setModalVisible(false);
    alert('Giriş başarılı, profil bilgileri görüntülendi!');
  };

  const handleClose = () => {
    setModalVisible(false);
    if (confirmVisible) {
      // Kullanıcı giriş yapmışsa diğer ekranlara geçiş yapabilir
      navigation.navigate('Home'); // Hedef ekran adını uygun şekilde değiştirin
    }
    setConfirmVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.authButton} onPress={handleSignInPress}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>E-posta:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.label}>Parola:</Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
                <Text style={styles.buttonText}>Onayla</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
                <Text style={styles.buttonText}>Vazgeç</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>E-posta:</Text>
            <Text style={styles.text}>{email}</Text>

            <Text style={styles.label}>Parola:</Text>
            <Text style={styles.text}>{password}</Text>

            <TouchableOpacity style={styles.button} onPress={handleSavePress}>
              <Text style={styles.buttonText}>Tamam</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.buttonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TabBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  authButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ProfilPage;
