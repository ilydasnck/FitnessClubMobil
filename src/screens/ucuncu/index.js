import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import Styles from './styles';
import Icons from '../../assets/icons';
import TextInputBox from '../../components/TextInputBox';
import ButtonComp from '../../components/ButtonComp';

const index = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.yanyana}>
        <View style={{padding: 10}}>
          <View>
            <Text style={Styles.text}>Create Your</Text>
          </View>
          <View>
            <Text style={Styles.text}>Account</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.text}>...</Text>
        </View>
      </View>

      <View style={Styles.girisContainer}>
        <View>
          <TextInputBox
            placeholder="İlayda Şenocak"
            icon={Icons.check}
            secureText={false}
            title="Full Name"
          />

          <TextInputBox
            placeholder="ilaydasenocak@gmail.com"
            icon={Icons.check}
            secureText={false}
            title="Phone Or Gmail"
          />

          <TextInputBox
            placeholder="......."
            icon={Icons.hide}
            secureText={true}
            title="Password"
          />

          <TextInputBox
            placeholder="......."
            icon={Icons.hide}
            secureText={true}
            title="Confirm Password"
          />

          <ButtonComp title={'Sign Up'} />
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
