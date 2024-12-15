import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignInUp = ({color, text, textColor}) => {
  return (
    <View>
      <View style={[Styles.button1, {backgroundColor: color}]}>
        <Text style={{color: textColor, fontSize: 20, fontWeight: 'bold'}}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default SignInUp;

const Styles = StyleSheet.create({
  button1: {
    width: 350,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
