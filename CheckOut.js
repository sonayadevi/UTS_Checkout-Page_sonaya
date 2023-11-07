import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Text, Alert, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Text, CheckBox, Button, Picker } from 'react-native-elements'; // Gunakan komponen CheckBox dari 'react-native-elements'


const CheckOut = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shippingOption, setShippingOption] = useState('');
  const [payOption, setPayOption] = useState('');
  const [note, setNote] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
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

  const handleAlamat = () =>{
    navigation.navigate('ListAlamat', {
      address,});
    };
    

const handleSave = () => {
    //navigation.navigate('ListAlamat', {
    //  name,
     // address,
     // shippingOption,
     // note,
    //  selectedImage, // Mengirim URL gambar yang dipilih ke halaman ListAlamat
    //});
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Masukkan Nama Anda"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button
        title="Pilih Alamat" onPress={handleAlamat}
        value={address}
        onChangeText={handleAlamat => setAddress(text)}
      />

      <Text>Opsi Pengiriman:</Text>
        <Picker
          selectedValue={shippingOption}
          onValueChange={(itemValue, itemIndex) => setShippingOption(itemValue)}
        >
          <Picker.Item label="Express (2000)" value="2000" />
          <Picker.Item label="Next Day (0)" value="0" />
          
          
        </Picker> 
      
        <Text>Opsi Pengiriman:</Text>
        <Picker
          selectedValue={payOption}
          onValueChange={(itemValue, itemIndex) => setPayOption(itemValue)}
        >
          <Picker.Item label="BCA (0901204210032)" value="1" />
          <Picker.Item label="BNI (1204210032)" value="2" />
          <Picker.Item label="COD " value="0" />
            
        </Picker> 

      <TextInput
        placeholder="Catatan"
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <Button title="Upload Bukti Transfer" onPress={handleChooseImage} />

      {selectedImage ? (
          <Image source={selectedImage} style={{ width: 200, height: 200 }} />
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

     <Button title="Check Out" onPress={handleSave} />
    </SafeAreaView>
  );
};

export default CheckOut;