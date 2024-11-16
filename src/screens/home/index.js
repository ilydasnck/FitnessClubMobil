import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Styles from './styles';
import Images from '../../assets/icons';

const index = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.yanyana}>
        <View style={{padding: 10}}>
          <View>
            <Text style={Styles.text}>Hello</Text>
          </View>
          <View>
            <Text style={Styles.text}>Sign in!</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.text}>...</Text>
        </View>
      </View>

      <View style={Styles.girisContainer}>
        <View>
          <View style={{mangin: 30}}>
            <View style={{marginBottom: 10}}>
              <Text style={Styles.girisText}>Gmail</Text>
            </View>
            <View style={Styles.iconWrapper}>
              <View style={Styles.yanyana2}>
                <View>
                  <Text style={Styles.girisText2}>ilaydasenocak@gmail.com</Text>
                </View>
                <View>
                  <Image source={Images.check} style={Styles.icon} />
                </View>
              </View>
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <View>
              <Text style={Styles.girisText}>Password</Text>
            </View>
            <View style={Styles.iconWrapper}>
              <View style={Styles.yanyana2}>
                <View>
                  <Text style={Styles.text2}>........</Text>
                </View>
                <View>
                  <Image source={Images.hide} style={Styles.icon} />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={Styles.text3}>Forgot password?</Text>
          </View>

          <View style={Styles.button}>
            <View style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>Sign In</Text>
            </View>
          </View>
        </View>

        <View style={Styles.ortala}>
          <Text style={Styles.girisText2}>Dont have account?</Text>
          <Text style={Styles.girisText3}>Sign up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
