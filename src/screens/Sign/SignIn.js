import React from 'react'
import { Image, StyleSheet, View, Text, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import SignInput from '../../components/common/basic/SignInput';
import Button from '../../components/common/basic/Button';
const SignIn = () => {
  return (
    <LinearGradient
        colors={['rgba(14, 190, 127, 0.5)', 'rgba(255, 255, 255, 0.5)' ]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}>

        <Image source={require('../../../assets/images/home/logo.png')} style={styles.logo}/>
        <View style={styles.text}>
            <Text style={styles.join}>Welcome back</Text>
            <Text style={styles.paragraph}>Our platform offers the best booking system to enable you to save time</Text>
        </View>
        <SignInput label={'Email'} icon={'mail'}/>
        <SignInput label={'Password'} icon={'lock'}/>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Button title={'Sign In'} width={300}/>
        </View>
        <View style={{marginTop: 180}}>
            <Text style={styles.footer}>Don't have an account ? <Text style={{fontWeight: '800',textDecorationLine: 'underline'}}>Log Up</Text></Text>
        </View>
        <View style={{height: 38}}></View>
        
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    logo:{
        height: 100,
        width: 100,
    },
    text: {
        alignItems: 'center',
        marginTop: -25,
    },
    join: {
        fontSize: 30
    },
    paragraph:{
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderRadius: 25,
        height: 50,
        borderColor: "#E6E8EE",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        opacity: .5,
    },
    label: {
        flex: 1,
        fontSize: 18,
        fontWeight: '800',
    },
    container: {
        flexDirection: "row",
        width: 130,
        marginLeft: 30,
    },
    footer: {
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center',
        color: '#0EBE7F',
    }
  });

export default SignIn