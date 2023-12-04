import React from 'react'
import SpecialityCard from '../../components/home/SpecialityCard'

const HomeScreen = () => {
  return (
    <>
        <SpecialityCard color={'red'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <SpecialityCard color={'blue'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <SpecialityCard color={'green'} imageSource={require('../../../assets/images/home/tooth.png')}/>
    </>
  )
}

export default HomeScreen