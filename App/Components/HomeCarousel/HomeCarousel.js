import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {Component, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {Metrics, Images, FontWeight, Colors} from '../../Theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const HomeCarousel = () => {
  const [activeIndex, setactiveIndex] = useState(0);
  const entries = [
    {
      title: 'Heart',
      image: Images.hearthealth,
      id: 'heartQuestions',
    },
    {
      title: 'Stress',
      image: Images.workstress,
      id: 'stressQuestions',
    },
    {
      title: 'Heart',
      image: Images.hearthealth,
      id: 'heartQuestions',
    },
    {
      title: 'Stress',
      image: Images.workstress,
      id: 'stressQuestions',
    },
  ];
  const RenderItem = ({item, index}) => {
    const navigation = useNavigation();
    return (
      <View style={styles.slide}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('aIQuestion', {type: item.id})}>
          <Image
            source={item.image}
            style={{
              width: Metrics.width - 100,
              height: 130,
              borderRadius: 8,
              resizeMode: 'cover',
            }}
          />
        </TouchableWithoutFeedback>
        {/* <View style={{width: Metrics.width - 100,height:100,borderRadius:8,marginTop:-100,backgroundColor: '#00000066'}}></View> */}
        {/* <Text style={styles.title}>{item.title}</Text> */}
      </View>
    );
  };
  return (
    <View style={{marginTop: 20}}>
      <Carousel
        autoplay={true}
        data={entries}
        loop={true}
        renderItem={({item}) => <RenderItem item={item} />}
        sliderWidth={Metrics.width - 40}
        itemWidth={Metrics.width - 100}
        onSnapToItem={index => setactiveIndex(index)}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeIndex}
        containerStyle={{marginTop: -20}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          // marginHorizontal: 8,
          backgroundColor: Colors.header,
        }}
        // inactiveDotStyle={
        //   {
        //     // Define styles for inactive dots here
        //   }
        // }
        // inactiveDotOpacity={0.4}
        // inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {},
  title: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: FontWeight.semiBold,
    fontSize: 15,
  },
});
export default HomeCarousel;
