import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../assets/theme'
import Spinner from 'react-native-loading-spinner-overlay'
import { useAuthContext } from '../hooks/useAuthContext'
import { InputField } from '../components/InputField'
import { SubmitButton } from '../components/SubmitButton'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useForm, SubmitHandler } from "react-hook-form"
import auth from '@react-native-firebase/auth';
import { OrDivider } from '../components/OrDivider'
import { AuthStackParams } from '../navigation/AuthStackNavigator'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

type FormData = {
  email: string;
  password: string;
}

type Props = NativeStackScreenProps<AuthStackParams, 'LoginScreen'>

export const LoginScreen: React.FC<Props> = ({navigation}) => {

  // conext hook
  const {user, handleSignIn, onGoogleButtonPress } = useAuthContext()

  // useForm hook
  const {control, handleSubmit, formState: {errors}} = useForm<FormData>()

  const onSignIn = handleSubmit((data) => {
    handleSignIn(data.email, data.password)
  })

  useEffect(() => {
    console.log(auth().currentUser);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={user.loading}/>

      <Image style={styles.heroImage} source={require('../../assets/images/loginwolf.png')}></Image>

      <Text>Inner Beast</Text>
      <Text>Unleash your inner beast</Text>

      <InputField
      rules={{required: 'Email is required'}}
      name='email' 
      control={control}
      placeholder='jonhdoe@gmail.com'
      secureTextEntry={false}
      autoCapitalize='none'
      setVisibility={false}
      leftIcon={<MaterialIcons name="email" size={24} color={COLORS.textBlack} />} />
      
      <InputField 
      rules={{required: 'Password is required'}}
      name='password'
      setVisibility
      control={control}
      placeholder='●●●●●●●●'
      secureTextEntry={true}
      placeholderTextColor={COLORS.inputGrayText}
      autoCapitalize='none'
      leftIcon={<Entypo name="lock" size={24} color={COLORS.textBlack} />} 
      rightIcon={<Entypo name="eye" size={24} color={COLORS.textBlack} />}
        />
      
      <TouchableOpacity>
      <Text onPress={() => navigation.navigate('EmailPromptModal')} style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <SubmitButton onPress={onSignIn}>
        Sing In
      </SubmitButton>

      <OrDivider />


      <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />

    <View style={{flexDirection: 'row'}}>
    <Text>Dont have an account?</Text>
    
    <Pressable onPress={() => navigation.navigate('SignupScreen')}><Text>Sign Up</Text></Pressable>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%', 
    justifyContent: 'center',
    backgroundColor: COLORS.withe,
    padding: 20
  }, 
  forgotPassword: {
    alignSelf: 'flex-end', 
    color: COLORS.grayText
  }, 
  heroImage: {
  height: 250, // Ajusta según sea necesario
  resizeMode: 'contain', // Asegúrate de que la imagen se ajuste sin deformarse
  alignSelf: 'center',
  marginVertical: 20, // Ajusta el espacio vertical
}
})