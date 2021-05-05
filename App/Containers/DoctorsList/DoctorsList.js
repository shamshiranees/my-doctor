import {ListItem, Avatar, Text, Button} from 'react-native-elements';
import React from 'react';
import {FlatList, View, Image, StyleSheet} from 'react-native';
import AppHeader from '../../Components/Header/AppHeader';
import {useSelector} from 'react-redux';
import {Card} from 'react-native-shadow-cards';
import {FontWeight, Colors, Helpers, Images} from '../../Theme';

const keyExtractor = (item, index) => index.toString();

const RenderItem = ({item, navigation}) => {
  return (
    <Card style={{margin: 10, borderRadius: 20, width: '95%'}}>
      <View style={[Helpers.flexRowStart, {padding: 10}]}>
        <Avatar
          size={'xlarge'}
          avatarStyle={{borderRadius: 20}}
          source={{uri: item.image}}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 16,
              letterSpacing: 1,
              fontWeight: FontWeight.Bold,
              color: Colors.textColor,
            }}>
            {item.Name}
          </Text>
          <Button
            icon={
              <Image
                source={
                  item.gender === 'Male'
                    ? Images.maleDoctor
                    : Images.femaleDoctor
                }
                style={{height: 25, width: 25}}
              />
            }
            type="clear"
            title={` ${item.years_of_experience} years exp`}
            titleStyle={{color: Colors.textColor, fontSize: 12}}
            buttonStyle={{padding: 0, paddingTop: 3}}
            containerStyle={{alignItems: 'flex-start', height: 25}}
          />
          <Text
            style={{
              backgroundColor: Colors.blue,
              color: Colors.white,
              fontSize: 12,
              borderRadius: 10,
              height: 20,
              textAlign: 'center',
              paddingTop: 3,
              overflow: 'hidden',
              marginTop: 5,
            }}>
            {item.specialisation}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: FontWeight.regular,
              color: Colors.lightGrey,
              width: 150,
              marginTop: 5,
            }}>
            {item.qualification}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: FontWeight.regular,
              color: Colors.textColor,
              width: 150,
              marginTop: 5,
            }}>
            {item.consulatation_days}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: FontWeight.regular,
              color: Colors.textColor,
              width: 150,
              marginTop: 2,
            }}>
            {item.consultation_time}
          </Text>
        </View>
      </View>
      <Button
        onPress={() =>
          navigation.navigate('doctorDetails', {selectedDoctor: item})
        }
        type="solid"
        title="Book Appoinment"
        containerStyle={{
          marginTop: 5,
          marginBottom: 0,
          borderRadius: 0,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        buttonStyle={{
          backgroundColor: Colors.header,
          height: 50,
          borderRadius: 0,
        }}
        titleStyle={{fontSize: 15}}
      />
    </Card>
  );
};

const DoctorsList = ({navigation, route}) => {
  const doctors = useSelector(({home}) => home.doctors);
  const tag = route.params !== undefined ? route.params.tag : '';
  return (
    <View>
      <AppHeader title={'Doctors'} />
      {tag === 'fromAI' && (
        <View style={{paddingHorizontal: 15}}>
          <Text style={[styles.homeHeader, {marginTop: 15}]}>
            Our Recommentation
          </Text>
          <Text style={styles.homeSub}>
            Book doctor's appoinment from top specialists in your city
          </Text>
        </View>
      )}
      <FlatList
        contentContainerStyle={{paddingBottom: 120}}
        keyExtractor={keyExtractor}
        data={doctors}
        renderItem={({item}) => (
          <RenderItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default DoctorsList;
const styles = StyleSheet.create({
  homeHeader: {
    fontSize: 18,
    fontWeight: FontWeight.Bold,
    letterSpacing: 0.8,
    marginTop: 10,
  },
  homeSub: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: FontWeight.regular,
    color: Colors.lightGrey,
  },
});
