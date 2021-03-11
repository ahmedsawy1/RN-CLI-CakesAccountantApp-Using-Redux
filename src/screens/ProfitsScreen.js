import React from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {emptyProfits} from '../store/action';
import MyButton from '../components/MyButton';
function ProfitsScreen() {
  const totalCost = useSelector((state) => state.cost);
  const grossProfit = useSelector((state) => state.grossProfit);
  const netProfit = grossProfit - totalCost;

  const dispatch = useDispatch();

  return (
    <View style={styles.con}>
      <Image
        source={require('../assets/cakes/logo.png')}
        style={styles.image}
      />
      <View style={styles.detailsCon}>
        <Text style={styles.cost}>Total Cost: {totalCost} $</Text>
        <Text style={styles.profit}>Total Profit: {grossProfit} $</Text>

        {grossProfit >= totalCost ? (
          <Text style={{color: '#0dddcb', fontSize: 19}}>
            The Profits: {netProfit} $
          </Text>
        ) : (
          <Text style={{color: 'red', fontSize: 19}}>
            The Lose: {netProfit}
          </Text>
        )}
      </View>

      <MyButton
        style={styles.button}
        title="Empty"
        onPress={() => dispatch(emptyProfits())}
      />

      <ImageBackground
        style={{height: 200, width: '100%', bottom: 0, position: 'absolute'}}
        source={require('../assets/cakes/background.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fae7ec',
    paddingBottom: 100,
  },
  image: {
    height: 250,
    width: 300,
    marginTop: 27,
    resizeMode: 'contain',
  },
  detailsCon: {
    backgroundColor: 'white',
    height: 120,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    marginTop: 20,
  },
  cost: {
    fontSize: 15,
  },
  profit: {
    fontSize: 15,
    marginVertical: 6,
  },
  button: {
    marginVertical: 10,
  },
});
export default ProfitsScreen;
