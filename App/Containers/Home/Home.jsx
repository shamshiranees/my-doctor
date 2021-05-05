import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedbackComponent,
  TextInput,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-navigation';
import Colors from '../../Theme/Colors';
import AppHeader from '../../Components/Header/AppHeader';
import MCQCard from '../../Components/MCQCard/MCQCard';
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Images from '../../Theme/Images';
import Metrics from '../../Theme/Metrics';
import {useSelector} from 'react-redux';
import FontWeight from '../../Theme/FontWeight';
import Helpers from '../../Theme/Helpers';
import {Card} from 'react-native-shadow-cards';
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';

const Home = ({navigation}) => {
  const homeData = useSelector(({home}) => home.data);
  const specilists = useSelector(({home}) => home.specilists);
  const hospitals = useSelector(({home}) => home.hospitals);

  return (
    <>
      <AppHeader title={'Home'} type={2} />
      <ScrollView>
        <View style={Helpers.contentView}>
          <Text style={[styles.homeHeader]}>Explore</Text>
          <Text style={styles.homeSub}>
            Are you feeling not well, but not sure what's wrong. Let us help you!
          </Text>
          <Card style={{padding: 10, marginTop: 25, borderRadius: 20}}>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('aIQuestion', {type: 'common'})
              }>
              <View style={Helpers.flexRowStart}>
                <Image
                  source={Images.roboDoctor}
                  style={{width: 60, height: 60}}
                />
                <Text
                  style={[
                    styles.homeHeader,
                    {
                      marginTop: 20,
                      marginLeft: 10,
                    },
                  ]}>
                  Find a doctor using AI
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Card>
          <Text style={[styles.homeHeader, {marginTop: 35}]}>Self check</Text>
          <Text style={styles.homeSub}>
            Self-check on Heart health and Work stress
          </Text>
          <HomeCarousel />
          <Text style={[styles.homeHeader]}>Care at home</Text>
          <Text style={styles.homeSub}>
            Book a slot for doctor consultation at home
          </Text>
          <Card style={{padding: 10, marginTop: 20, borderRadius: 20}}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('doctors', {type: 'common'})}>
              <View style={Helpers.flexRowStart}>
                <Image
                  source={Images.doctorhome}
                  style={{width: 60, height: 60, borderRadius: 8}}
                />
                <Text
                  style={[
                    styles.homeHeader,
                    {
                      marginTop: 20,
                      marginLeft: 10,
                    },
                  ]}>
                  Doctor at home
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Card>
          <Text style={[styles.homeHeader, {marginTop: 35}]}>
            Not feeling too well?
          </Text>
          <Text style={styles.homeSub}>Book doctor's appoinment instantly</Text>
          <FlatList
            bounces={false}
            style={{marginTop: 10}}
            data={homeData}
            numColumns={4}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('doctors')}>
                <View style={{padding: 5, alignItems: 'center', marginTop: 15}}>
                  <Image
                    source={item.image}
                    style={{
                      height: Metrics.width / 4 - 40,
                      width: Metrics.width / 4 - 40,
                    }}
                  />
                  <Text style={styles.symtomText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <Text style={[styles.homeHeader, {marginTop: 35}]}>
            Consult a specialist
          </Text>
          <Text style={styles.homeSub}>
            Book doctor's appoinment from top specialists in your city
          </Text>
          <FlatList
            style={{marginTop: 10}}
            bounces={false}
            data={specilists}
            numColumns={3}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('doctors')}>
                <View
                  style={{
                    padding: 0,
                    marginHorizontal: 5,
                    alignItems: 'center',
                    marginTop: 40,
                    borderRadius: 8,
                    overflow: 'hidden',
                    backgroundColor: 'red',
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      height: Metrics.width / 3 - 20,
                      width: Metrics.width / 3 - 20,
                    }}
                  />
                  <View
                    style={{
                      height: Metrics.width / 3 - 20,
                      width: Metrics.width / 3 - 20,
                      marginTop: -(Metrics.width / 3 - 20),
                      backgroundColor: '#0000007F',
                    }}>
                    <Text
                      style={[
                        styles.symtomText,
                        {
                          color: Colors.white,
                          fontSize: 11,
                          width: '100%',
                          fontWeight: FontWeight.Bold,
                          marginTop: (Metrics.width / 3 - 20) / 2,
                        },
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <Text style={[styles.homeHeader, {marginTop: 35}]}>
            Book OP Consultation
          </Text>
          <Text style={styles.homeSub}>
            Book a slot for doctor consultation at hospital
          </Text>
          <FlatList
            style={{marginTop: 10}}
            bounces={false}
            data={hospitals}
            // numColumns={3}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('doctors')}>
                <View
                  style={[
                    Helpers.flexRowStart,
                    {
                      padding: 0,
                      marginHorizontal: 5,
                      alignItems: 'center',
                      marginTop: 40,
                      borderRadius: 8,
                      overflow: 'hidden',
                    },
                  ]}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      borderRadius: 8,
                    }}
                  />
                  <View
                    style={{
                      paddingHorizontal: 10,
                      // height: Metrics.width / 3 - 20,
                      // width: Metrics.width / 3 - 20,
                      // marginTop: -(Metrics.width / 3 - 20),
                      // backgroundColor: '#0000007F',
                    }}>
                    <Text
                      style={[
                        // styles.symtomText,
                        {
                          color: Colors.textColor,
                          fontSize: 15,
                          width: '100%',
                          fontWeight: FontWeight.Bold,
                          // marginTop: (Metrics.width / 3 - 20) / 2,
                        },
                      ]}>
                      {item.name}
                    </Text>
                    <Text style={styles.hospitalAddress}>{item.address}</Text>
                    <Text style={styles.hospitalAddress}>{item.phone_no}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
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
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  symtomText: {
    fontSize: 12,
    color: Colors.textColor,
    width: 80,
    textAlign: 'center',
    lineHeight: 15,
    marginTop: 7,
  },
  hospitalAddress: {
    maxWidth: Metrics.width - 150,
    fontSize: 12,
    color: Colors.lightGrey,
    marginTop: 3,
  },
});

export default Home;
