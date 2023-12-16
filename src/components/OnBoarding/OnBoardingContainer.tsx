import { StyleSheet, View } from 'react-native'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const OnBoardingContainer: React.FC<Props> = ({children}) => {
  return (
    <View style={styles.container} >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40, 
        paddingHorizontal: 40,
    }
})