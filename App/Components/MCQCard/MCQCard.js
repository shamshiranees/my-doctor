import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Colors from '../../Theme/Colors';
import {Button} from 'react-native-elements';
import Helpers from '../../Theme/Helpers';
import FontWeight from '../../Theme/FontWeight';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const MCQCard = ({data, onAnswerSeleted}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const onValueSelected = (val, point) => {
    setSelectedAnswer(val);
    setTimeout(() => {
      onAnswerSeleted(val, data, point);
      setSelectedAnswer('');
    }, 1000);

    // setSelectedAnswer('')
  };
  return (
    <View style={styles.container}>
      <Card style={{padding: 10, margin: 10, borderRadius: 8}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginBottom: 50,
          }}>
          <Text
            style={{
              fontWeight: FontWeight.Bold,
              fontSize: 18,
              color: Colors.black,
              lineHeight: 24,
            }}>
            {data.question}
          </Text>
        </View>
        {data.answers.map(item => (
          <TouchableWithoutFeedback
            onPress={() => {
              onValueSelected(item.ans, item.points);
            }}
            style={[
              styles.answer,
              {
                backgroundColor:
                  selectedAnswer === item.ans ? Colors.header : Colors.white,
              },
            ]}>
            <Text
              style={[
                styles.answerText,
                {
                  color:
                    selectedAnswer === item.ans
                      ? Colors.white
                      : Colors.textColor,
                },
              ]}>
              {item.ans}
            </Text>
          </TouchableWithoutFeedback>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  answer: {
    padding: 10,
    paddingTop: 17,
    borderRadius: 8,
    margin: 5,
    height: 50,
    width: '95%',
    borderColor: Colors.lightGrey,
    borderWidth: 0.3,
    // backgroundColor: Colors.secondary,
  },
  answerText: {
    color: Colors.textColor,
  },
});

export default MCQCard;
