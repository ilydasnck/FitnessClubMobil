import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Styles from './styles';
import Images from '../../assets/icons';
import TextInputBox from '../../components/TextInputBox';
import ButtonComp from '../../components/ButtonComp';
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
          <TextInputBox
            icon={Images.check}
            placeholder="ilaydasenocak@gmail.com"
            title="Gmail"
            secureText={false}
          />

          <TextInputBox
            icon={Images.hide}
            placeholder="........."
            title="Gmail"
            secureText={true}
          />

          <View>
            <Text style={Styles.text3}>Forgot password?</Text>
          </View>

          <ButtonComp title="Sign In" />
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
