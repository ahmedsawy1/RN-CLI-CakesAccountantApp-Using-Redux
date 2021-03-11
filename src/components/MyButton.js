import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function MyButton({title, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.con, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  con: {
    height: 50,
    width: 175,
    backgroundColor: '#fa0e8f',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 17,
  },
});
export default MyButton;
