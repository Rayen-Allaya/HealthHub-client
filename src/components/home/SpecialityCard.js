import Card from '../common/Card';
import React from 'react';
import { View, Image,Text, StyleSheet } from 'react-native';

const SpecialityCard = ({color,imageSource}) => {
  return (
    <Card style={[styles.container, {backgroundColor: color}]}>
      <Image
        source={imageSource}
        style={styles.logo}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    display: 'flex',
    alignItems: 'center',
    width:130,
    height:130
  },
  logo: {
    resizeMode : "contain",
    height : 100,
  },
});

export default SpecialityCard;
