import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Button = ({title, width, height}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 1000);
  };


  return (
    <View style={[styles.wrapperCustom, {width: width, height: height}]}>
      
      <Pressable
        onPressIn={handlePressIn}
        style={({ pressed }) => [
            pressed && { 
              opacity: .7
            },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#0EBE7F',
    resizeMode : "contain",
    justifyContent:'center',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});

export default Button;
