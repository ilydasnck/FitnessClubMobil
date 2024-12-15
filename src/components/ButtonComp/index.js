import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonComp = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={Styles.button}>
        <View style={Styles.buttonContainer}>
          <Text style={Styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const Styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#641D3D',
    borderRadius: 30,
    padding: 10,
    marginTop: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
