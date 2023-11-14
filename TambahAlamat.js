import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { NativeBaseProvider,Button, Text } from 'native-base';

const TambahAlamat = ({ navigation }) => {
  const [kota, setKota] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [desa, setDesa] = useState(''); // Tambah variabel desa
  const [catatan, setCatatan] = useState('');

  const handleSaveAddress = () => {
    const selectedAddress = `${catatan},${desa}, ${kecamatan}, ${kota}`;
    navigation.navigate('ListAlamat', {
      address: selectedAddress,
      kota: kota,
      kecamatan: kecamatan,
      desa: desa,
      catatan: catatan,
    });
  };

  return (
    <NativeBaseProvider>
    <View>
      <view style={{ margin: 15 }}>
      <TextInput
        placeholder="Masukkan Kota"
        value={kota}
        onChangeText={(text) => setKota(text)}
      /></view>

      <view style={{ margin: 15 }}>
      <TextInput
        placeholder="Masukkan Kecamatan"
        value={kecamatan}
        onChangeText={(text) => setKecamatan(text)}
      /></view>

    <view style={{ margin: 15 }}>
      <TextInput
        placeholder="Masukkan Desa" // Tambah input untuk Desa
        value={desa}
        onChangeText={(text) => setDesa(text)}
      /></view>

    <view style={{ margin: 15 }}>
      <TextInput
        placeholder="Masukkan Detail Alamat"
        value={catatan}
        onChangeText={(text) => setCatatan(text)}
      /></view>

      <Button  bg="yellow.500"
        h={50}  onPress={handleSaveAddress} > SUBMIT </Button>
    </View>
    </NativeBaseProvider>
  );
};

export default TambahAlamat;