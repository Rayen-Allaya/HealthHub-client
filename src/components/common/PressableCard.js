import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const PressableCard = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };

  return (
    <View style={{...props.style}}>

      <Pressable
        onPressIn={handlePressIn}
        style={({ pressed }) => [
          {
            shadowColor: pressed || isPressed ? '#171717' : 'transparent',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: pressed || isPressed ? 0.2 : 0,
            shadowRadius: 3,
          },
          styles.wrapperCustom,
         
        ]}
      >
        { props.children}
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default PressableCard;
