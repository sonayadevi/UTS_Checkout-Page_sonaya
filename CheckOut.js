import React, { useState, useEffect } from 'react';
import { TextInput, Image, Alert, SafeAreaView, Picker, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { NativeBaseProvider, Box, Text, Button,View  } from "native-base";


const CheckOut = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shippingOption, setShippingOption] = useState('2000');
  const [payOption, setPayOption] = useState('1');
  const [note, setNote] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission required', 'Please allow access to your photo library to upload images.');
        }
      }
    })();
  }, []);

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleAlamat = () => {
    navigation.navigate('ListAlamat', {
      address: address, // Pass the address to the ListAlamat page
    });
  };



  const handleSave = () => {
    // Perform the actual checkout process here.
    // Access and use the state variables (name, address, shippingOption, payOption, note) and the selected image (selectedImage) as needed.
    // Example: You can console.log the values for verification.

    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Shipping Option:', shippingOption);
    console.log('Payment Option:', payOption);
    console.log('Note:', note);
    console.log('Selected Image URI:', selectedImage);

    // Then, you can navigate to a confirmation page or perform any other necessary actions.
    navigation.navigate('CheckoutConfirmation');
  };

  return (
    <NativeBaseProvider>
    <SafeAreaView>
      <view style={{ margin: 15 }}>
     
      <TextInput
        placeholder="Masukkan Nama Anda"
        value={name}
        onChangeText={(text) => setName(text)}
        
      /></view>

      <Button
        bg="yellow.500"
        h={50}
        onPress={handleAlamat}> Pilih Alamat </Button>


    
      <Text>Opsi Pengiriman:</Text>
      <Picker
        selectedValue={shippingOption}
        onValueChange={(itemValue) => setShippingOption(itemValue)}
      >
        <Picker.Item label="Express (Rp 2000)" value="2000" />
        <Picker.Item label="Next Day (Gratis)" value="0" />
      </Picker>

      
      <Text>Opsi Pembayaran:</Text>
      <Picker
        selectedValue={payOption}
        onValueChange={(itemValue) => setPayOption(itemValue)}
      >
        <Picker.Item label="BCA (No. Rekening: 0901204210032)" value="1" />
        <Picker.Item label="BNI (No. Rekening: 1204210032)" value="2" />
        <Picker.Item label="COD (Bayar di Tempat)" value="0" />
      </Picker>

      
      <Button 
        h={50}
        bg="yellow.500"
        onPress={handleChooseImage}
      > Upload Bukti Transfer </Button>

      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      ) : (
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Pilih Gambar</Text>
        </View>
      )}

    <view style={{ margin: 15 }}>
   
      <TextInput
        placeholder="Masukkan Catatan"
        value={note}
        onChangeText={(text) => setNote(text)}
      /></view>
 
            
    <Button   
        h={50}
        bg="yellow.500"
        onPress={handleSave}
      > Check Out </Button>
     

      
    </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default CheckOut;