import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Text,
  TextInput,
  Modal,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import CakesCard from '../components/CakesCard';
import MyButton from '../components/MyButton';
import {
  makeNumCake,
  makeOneCake,
  sellNumCake,
  sellOneCake,
} from '../store/action';
import ProfitsScreen from './ProfitsScreen';

const phoneWidth = Dimensions.get('screen').width;
const phoneHeight = Dimensions.get('screen').height;

function MainScreen() {
  const [index, setIndex] = useState(0);
  const [number, setnumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const refContainer = useRef();
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.cakes);

  useEffect(() => {
    refContainer.current.scrollToIndex({animated: true, index}); // تغيير على حسب قيمة ستايت
  }, [index]);

  const theNext = () => {
    if (index < cakes.length - 1) {
      setIndex(index + 1);
    }
  };
  const thePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <View style={styles.con}>
        <Image
          source={require('../assets/cakes/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Icon
          style={[styles.iconConPosition, {left: phoneWidth * 0.05}]}
          onPress={thePrevious}
          size={55}
          color="#0dddcb"
          name="caretleft"
        />

        <Icon
          style={[styles.iconConPosition, {right: phoneWidth * 0.05}]}
          onPress={theNext}
          size={55}
          color="#0dddcb"
          name="caretright"
        />
        <FlatList
          ref={refContainer}
          data={cakes}
          keyExtractor={(item, index) => item.id.toString()}
          style={styles.flatList}
          renderItem={({item, index}) => (
            <CakesCard
              image={item.image}
              id={item.id}
              title={item.title}
              price={item.price}
              cost={item.cost}
              quantity={item.qty}
              onPress={() => dispatch(makeOneCake(index))}
            />
          )}
          horizontal
          pagingEnabled //تفعيل خاصية التمرير
          showsHorizontalScrollIndicator={false} // محدد التمرير
          initialScrollIndex={index}
        />
        <MyButton title="Go To Profits" onPress={() => setModalVisible(true)} />
        <TextInput
          placeholder="Enter Number"
          value={number}
          onChangeText={(text) => setnumber(text)}
          textAlign="center"
          style={styles.textInput}
        />
        <View style={styles.bottomView}>
          <Text onPress={() => dispatch(makeOneCake(index))}>Make one</Text>
          <Text onPress={() => dispatch(sellOneCake(index))}>sell one</Text>
          <Text onPress={() => dispatch(makeNumCake(index, number))}>
            Make num
          </Text>
          <Text onPress={() => dispatch(sellNumCake(index, number))}>
            sell num
          </Text>
        </View>
      </View>
      <Modal visible={modalVisible}>
        <ProfitsScreen onPress={() => setModalVisible(false)} />
        <MyButton
          style={styles.button}
          title="Back To  Factory"
          onPress={() => setModalVisible(false)}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fae7ec',
    paddingBottom: 100,
  },
  bottomView: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    backgroundColor: '#0dddcb',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  flatList: {
    flex: 1,
    marginVertical: phoneHeight * 0.05,
  },
  iconConPosition: {
    position: 'absolute',
    top: phoneHeight * 0.24,
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    bottom: phoneHeight * 0.15,
    alignSelf: 'center',
  },
  logo: {
    height: 30,
    width: 60,
    position: 'absolute',
    left: 19,
    top: 14,
  },
  textInput: {
    marginTop: 10,
    borderWidth: 1,
    width: 160,
    borderRadius: 15,
    borderColor: '#fa0e8f',
  },
});
export default MainScreen;
