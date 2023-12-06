import React from 'react'
import SpecialityCard from '../../components/home/SpecialityCard'
import PressableButton from '../../components/common/Button'

const HomeScreen = () => {
  return (
    <>
        <SpecialityCard color={'red'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <SpecialityCard color={'blue'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <SpecialityCard color={'green'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <PressableButton title={'Malek'} width={120} height={60}/>
    </>
  )
}

export default HomeScreen