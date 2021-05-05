import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Metrics, Colors, FontWeight} from '../../Theme';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';

const DoctorDetails = ({route, navigation}) => {
  const doctorData = route.params.selectedDoctor;
  const [selectedDay, setselectedDay] = useState(4);
  const [selectedTime, setselectedTime] = useState('4');

  return (
    <>
    <View style={{height:80,marginBottom:-80,zIndex:1000,paddingLeft:20,paddingTop:40}}>
        <Icon
            color="black"
            size={20}
            name="chevron-left"
            onPress={() => navigation.goBack()}
          />
          </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,zIndex:99,
          backgroundColor: Colors.white,
        }}
        bounces={false}>

        <Image
          source={{
            uri: doctorData.image,
          }}
          style={{width: Metrics.width, height: Metrics.height * 0.65}}
        />
        
        <View
          style={{
            marginTop: -80,
            backgroundColor: Colors.white,
            paddingHorizontal: 15,
            borderRadius: 30,
          }}>
          <View style={{alignItems: 'center', marginTop: -40}}>
            <Card
              style={{
                backgroundColor: Colors.blue,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 35,
                width: Metrics.width / 1.5,
                padding: 10,
                height: 80,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: FontWeight.Bold,
                  fontSize: 16,
                }}>
                {doctorData.Name}
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: FontWeight.regular,
                  fontSize: 12,
                  marginTop: 3,
                }}>
                {doctorData.specialisation}
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: FontWeight.regular,
                  fontSize: 11,
                  marginTop: 3,
                }}>
                {doctorData.qualification}
              </Text>
            </Card>
          </View>
          <View>
            <Text style={styles.header}>Schedule</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 10}}
              bounces={false}
              data={[
                {day: 'Sun', date: 2},
                {day: 'Mon', date: 3},
                {day: 'Tue', date: 4},
                {day: 'Wed', date: 5},
                {day: 'Thu', date: 6},
                {day: 'Fri', date: 7},
                {day: 'Sat', date: 8},
              ]}
              horizontal={true}
              renderItem={({item, index}) => (
                <DaySelector
                  item={item}
                  selected={item.date === selectedDay ? true : false}
                  onDaySelect={date => setselectedDay(date)}
                />
              )}
            />
          </View>
          <View>
            <Text style={styles.header}>Visiting Hours</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 10}}
              bounces={false}
              data={[
                {time: '09:00', id: 2},
                {time: '10:00', id: 3},
                {time: '11:00', id: 4},
                {time: '12:00', id: 5},
                {time: '02:00', id: 7},
                {time: '03:00', id: 8},
                {time: '04:00', id: 8},
                {time: '05:00', id: 7},
                {time: '06:00', id: 8},
                {time: '07:00', id: 8},
              ]}
              horizontal={true}
              renderItem={({item, index}) => (
                <TimeSelector
                  item={item}
                  selected={item.time === selectedTime ? true : false}
                  onTimeSelect={time => setselectedTime(time)}
                />
              )}
            />
          </View>
          <Text style={styles.header}>Add a note</Text>
          <TextInput
            numberOfLines={5}
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="write something that you want to inform your doctor"
          />
          <View>
            <Text style={styles.header}>About</Text>
            <Text style={styles.desc}>{doctorData.description}</Text>
          </View>
        </View>
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('appoinmentConfirmed')}
        title="Confirm Appointment"
        buttonStyle={{height: 60, backgroundColor: Colors.header}}
      />
    </>
  );
};

export default DoctorDetails;

const DaySelector = ({item, selected, onDaySelect}) => {
  const {day, date} = item;
  return (
    <TouchableOpacity onPress={() => onDaySelect(item.date)}>
      <View
        style={{
          backgroundColor: selected ? Colors.header : Colors.white,
          padding: 15,
          borderRadius: 30,
          width: 55,
          paddingHorizontal: 5,
          marginHorizontal: 10,
        }}>
        <Text
          style={[
            styles.selectorText,
            {color: selected ? Colors.white : Colors.textColor, marginTop: 0},
          ]}>
          {day}
        </Text>
        <Text
          style={[
            styles.selectorText,
            {color: selected ? Colors.white : Colors.textColor},
          ]}>
          {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const TimeSelector = ({item, onTimeSelect, selected}) => {
  const {time} = item;
  return (
    <TouchableOpacity onPress={() => onTimeSelect(time)}>
      <View
        style={{
          backgroundColor: selected ? Colors.header : Colors.white,
          borderWidth: selected ? 0 : 0.3,
          borderColor: Colors.lightGrey,
          padding: 10,
          margin: 5,
          borderRadius: 30,
          width: 100,
        }}>
        <Text
          style={[
            styles.selectorText,
            {color: selected ? Colors.white : Colors.textColor, marginTop: 0},
          ]}>
          {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  header: {
    color: Colors.textColor,
    fontWeight: FontWeight.Bold,
    fontSize: 15,
    marginTop: 30,
  },
  selectorText: {
    fontWeight: FontWeight.Bold,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  desc: {
    color: Colors.textColor,
    fontWeight: FontWeight.regular,
    fontSize: 13,
    lineHeight: 20,
  },
  input: {
    borderWidth: 0.3,
    borderColor: Colors.lightGrey,
    padding: 15,
    marginTop: 10,
    fontSize: 12,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
  },
});
