import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

const OpenURLButton = (props) => {
  function handleClick() {
    Linking.canOpenURL(props.url).then((supported) => {
      if (supported) {
        Linking.openURL(props.url);
      } else {
        console.log("Don't know how to open URI: " + props.url);
      }
    });
  }
  return (
    <TouchableOpacity onPress={handleClick}>
      {' '}
      <View>
        {' '}
        <Text>Open {props.url}</Text>{' '}
      </View>{' '}
    </TouchableOpacity>
  );
};

export default OpenURLButton;
