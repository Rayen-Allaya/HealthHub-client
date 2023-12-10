import React from 'react'
import { Image, StyleSheet, View, Text, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import SignInput from '../../components/common/basic/SignInput';
import Button from '../../components/common/basic/Button';
const SignUp = () => {
  return (
    <LinearGradient
        colors={['rgba(14, 190, 127, 0.5)', 'rgba(255, 255, 255, 0.5)' ]}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}>

        <Image source={require('../../../assets/images/home/logo.png')} style={styles.logo}/>
        <View style={styles.text}>
            <Text style={styles.join}>Join us save time</Text>
            <Text style={styles.paragraph}>Join our platform Heal Hub to explore the best doctors and save your precious time with smart booking</Text>
        </View>
        <SignInput label={'Full Name'} icon={'user'}/>
        <SignInput label={'Email'} icon={'mail'}/>
        <SignInput label={'Password'} icon={'lock'}/>
        <SignInput label={'Phone N°'} icon={'phone'}/>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Button title={'Sign Up'} width={300}/>
        </View>
        <View style={{marginTop: 5}}>
            <Text style={styles.footer}>Have an account ? <Text style={{fontWeight: '800',textDecorationLine: 'underline'}}>Log in</Text></Text>
            <Text style={[styles.footer, {textDecorationLine: 'underline'}]}>Continue as a guest</Text>
        </View>
        <View style={{height: 16}}></View>
        
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

export default SignUp