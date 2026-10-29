import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Picker from '@react-native-picker/picker';

export default function Formulario() {
  const [mensaje, setMensaje] = useState(null);

  const handleCotizar = () => {
    setMensaje('Formulario creado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Formulario de Cotización</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Moneda</Text>
          <Picker
            style={styles.picker}
            selectedValue=""
            onValueChange={() => {}}
          >
            <Picker.Item label="Seleccione" value="" />
            <Picker.Item label="Dolar USD" value="USD" />
            <Picker.Item label="Peso Mexicano MXN" value="MXN" />
            <Picker.Item label="Euro EUR" value="EUR" />
            <Picker.Item label="Libra Esterlina GBP" value="GBP" />
          </Picker>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Criptomoneda</Text>
          <Picker
            style={styles.picker}
            selectedValue=""
            onValueChange={() => {}}
          >
            <Picker.Item label="Seleccione" value="" />
            <Picker.Item label="Bitcoin BTC" value="BTC" />
            <Picker.Item label="Ethereum ETH" value="ETH" />
            <Picker.Item label="Litecoin LTC" value="LTC" />
            <Picker.Item label="Ripple XRP" value="XRP" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.btnCotizar} onPress={handleCotizar}>
          <Text style={styles.btnText}>Cotizar</Text>
        </TouchableOpacity>

        {mensaje && <Text style={styles.mensaje}>{mensaje}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 24,
  },
  campo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  picker: {
    height: 52,
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    color: '#111827',
    backgroundColor: '#fff',
  },
  btnCotizar: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  mensaje: {
    marginTop: 16,
    fontSize: 15,
    color: '#16a34a',
    fontWeight: '700',
    textAlign: 'center',
  },
});
