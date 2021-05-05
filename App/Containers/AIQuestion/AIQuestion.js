import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import MCQCard from '../../Components/MCQCard/MCQCard';
import AppHeader from '../../Components/Header/AppHeader';
import {useSelector} from 'react-redux';
const AIQuestion = ({navigation, route}) => {
  const type = route.params !== undefined ? route.params.type : '';

  const allQuestions = useSelector(({home}) => home[type]);
  const [childQuestion, setChildQuestion] = useState('');
  const [questionNumber, setquestionNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const onAnswerSeleted = (val, data, point) => {
    if (data.childQuestion !== undefined) {
      if (data.childQuestion[val] !== undefined) {
        setChildQuestion(data.childQuestion[val]);
      } else {
        setChildQuestion(data.childQuestion.allOthers);
      }
    } else {
      setChildQuestion('');
    }
    if (allQuestions.length === questionNumber + 1) {
      navigation.navigate('doctors', {tag: 'fromAI'});
    } else {
      console.log(Number(point));
      
      setPoints(points + Number(point));
      console.log('pointss', points + Number(point));

      setquestionNumber(questionNumber + 1);
    }
  };
  return (
    <View>
      <AppHeader title={'Questions'} />

      <MCQCard
        data={
          childQuestion === '' ? allQuestions[questionNumber] : childQuestion
        }
        onAnswerSeleted={onAnswerSeleted}
      />
    </View>
  );
};

export default AIQuestion;
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'red'},
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
});
