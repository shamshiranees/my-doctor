import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Images, Metrics, FontWeight, Colors} from '../../Theme';
import {Button} from 'react-native-elements';

const AppoinmentConfirmed = ({navigation}) => {
  return (
    <View
      style={{
        height: Metrics.height,
        justifyContent: 'center',
        alignItems: 'center',paddingHorizontal:15
      }}>
      <Image
        source={Images.bookingConfirm}
        style={{width: 200, height: 200}}
      />
      <Text style={styles.confirmHeader}>Confirmed</Text>
      <Text style={styles.confirmDesc}>
        You'll get an email along with your booking confirmation
      </Text>

      <Button
       onPress={()=>navigation.navigate('home')}
        title="Back Home"
        buttonStyle={{
          height: 50,
          borderRadius: 30,
          width: 150,
          backgroundColor: Colors.header,
        }}
      />
    </View>
  );
};

export default AppoinmentConfirmed;
const styles = StyleSheet.create({
  confirmHeader: {
    fontSize: 27,
    fontWeight: FontWeight.Bold,
    letterSpacing: 1,
    marginTop: 30,
  },
  confirmDesc: {
    fontSize: 12,
    fontWeight: FontWeight.Bold,
    letterSpacing: 0.9,
    color: Colors.lightGrey,
    marginTop: 10,marginBottom:70
  },
});
