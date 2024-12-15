import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default TextInputBox = ({title, placeholder, icon, secureText}) => {
  return (
    <View style={{marginTop: 5}}>
      <View style={{marginBottom: 5}}>
        <Text style={Styles.girisText}>{title}</Text>
      </View>
      <View style={Styles.iconWrapper}>
        <View style={Styles.yanyana2}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#BDBCC2"
            style={{fontSize: 20}}
            secureTextEntry={secureText}></TextInput>
          <View>
            <Image source={icon} style={Styles.icons} />
          </View>
        </View>
      </View>
    </View>
  );
};

TextInputBox.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  secureText: PropTypes.bool,
};

const Styles = StyleSheet.create({
  girisText: {
    color: '#641D3D',
    fontSize: 20,
  },
  iconWrapper: {
    borderBottomWidth: 2, // İkonun altına çizgi ekler
    borderBottomColor: '#BDBCC2', // Çizgi rengi
    paddingBottom: 4, // İkon ile çizgi arasındaki boşluk
  },
  yanyana2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    width: 30,
    height: 30,
    tintColor: '#BDBCC2',
  },
});
