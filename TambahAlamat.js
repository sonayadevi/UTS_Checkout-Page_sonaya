import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Text, CheckBox, Button } from 'react-native-elements'; // Gunakan komponen CheckBox dari 'react-native-elements'

const TambahAlamat = ({ navigation }) => {
  const [kota, setKota] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [desa, setDesa] = useState(''); // Tambah variabel desa
  const [catatan, setCatatan] = useState('');

  const handleSaveAddress = () => {
    const selectedAddress = `${desa}, ${kecamatan}, ${kota}`;
    navigation.navigate('ListAlamat', {
      address: selectedAddress,
      kota: kota,
      kecamatan: kecamatan,
      desa: desa,
      catatan: catatan,
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Masukkan Kota"
        value={kota}
        onChangeText={(text) => setKota(text)}
      />

      <TextInput
        placeholder="Masukkan Kecamatan"
        value={kecamatan}
        onChangeText={(text) => setKecamatan(text)}
      />

      <TextInput
        placeholder="Masukkan Desa" // Tambah input untuk Desa
        value={desa}
        onChangeText={(text) => setDesa(text)}
      />

      <TextInput
        placeholder="Masukkan Detail Alamat"
        value={catatan}
        onChangeText={(text) => setCatatan(text)}
      />

      <Button title="Submit" onPress={handleSaveAddress} />
    </View>
  );
};

export default TambahAlamat;
