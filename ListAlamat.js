import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { NativeBaseProvider, Text, Button } from 'native-base';
import { CheckBox } from 'react-native-elements';

const ListAlamat = ({ route, navigation }) => {
  const { address, catatan, kota, kecamatan, desa } = route.params;

  // State untuk menyimpan alamat terpilih
  const [selectedAddress, setSelectedAddress] = useState(null);

  // State untuk menyimpan daftar alamat yang telah disubmit
  const [submittedAddresses, setSubmittedAddresses] = useState([]);

  // Fungsi untuk menambahkan alamat yang telah disubmit
  const addSubmittedAddress = (address) => {
    setSubmittedAddresses([...submittedAddresses, address]);
  };

  // Fungsi untuk menghapus alamat yang telah disubmit
  //const removeSubmittedAddress = (address) => {
   // setSubmittedAddresses(submittedAddresses.filter((a) => a !== address));
 // };

  const handleAddAlamat = () => {
    navigation.navigate('TambahAlamat', { addSubmittedAddress });
  };

  const handlePilihAlamat = () => {
    if (selectedAddress) {
      navigation.navigate('CheckOut', {
        alamatTerpilih: selectedAddress,
      });
    }
  };

  return (
    <NativeBaseProvider>
    <View>
      <view style={{ margin: 15 }}>
      <header>Pilih Alamat:</header></view>

      <Button 
        bg="yellow.500"
        h={50} 
        onPress={handleAddAlamat} > Tambah Alamat </Button>

     
          <View key={address} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              checked={selectedAddress === address}
              onPress={() => setSelectedAddress(selectedAddress === address ? null : address)}
            />
            <Text style={{ flex: 1, marginLeft: 10 }}>{catatan} {address}</Text>
          </View>
      
    

      <Button  
        bg="yellow.500"
        h={50}  
        onPress={handlePilihAlamat} > SUBMIT </Button>
    </View>
    </NativeBaseProvider>
  );
  
};

export default ListAlamat;
