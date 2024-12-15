import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Styles from './style';
import Images from '../../assets/icons';
import SignInUp from '../../components/SignInUp';

const index = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={Styles.nokta}>...</Text>
        </View>

        <View style={Styles.ortala}>
          <Image source={Images.dumbbell} style={Styles.icon} />
          <Text style={Styles.text}>FITNESS CLUB</Text>
          <View style={{marginTop: 130}}>
            <Text style={Styles.text2}>Welcome Back</Text>
          </View>

          <View>
            <SignInUp text="Sign In" textColor="white" />
            <SignInUp text="Sign Up" textColor={'black'} color={'white'} />
          </View>
          <View style={{marginTop: 80}}>
            <Text style={{fontSize: 20, color: 'white'}}>
              Login with Social Media
            </Text>
          </View>
          <View style={Styles.yanyana}>
            <View style={Styles.logoContainer}>
              <Image source={Images.instagram} style={Styles.icon2} />
            </View>

            <View style={Styles.logoContainer}>
              <Image source={Images.twitter} style={Styles.icon2} />
            </View>

            <View style={Styles.logoContainer}>
              <Image source={Images.facebook} style={Styles.icon2} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
