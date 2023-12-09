import { StyleSheet, Text, Pressable, PressableProps, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/theme'
import Animated,{ SharedValue, useAnimatedStyle, interpolate } from 'react-native-reanimated'

type Props = PressableProps & {
    title: string
    description: string;
    isSelected: boolean;
    scrollY: SharedValue<number>
    index: number
}

export const AnimatedCategorieCard: React.FC<Props> = ({title, description, isSelected, index, scrollY, ...rest}) => {
 
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
          scrollY.value,
          [-1, 0, 200 * index, 200 * (index + 2)],
          [1, 1, 1, 0]
        );
    
        return {
          transform: [{ scale }],
        };
      });
  
  
    return (
    <Animated.View style={animatedStyle}>
    <Pressable  {...rest} style={[styles.cardContainer, isSelected && styles.selected]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.whiteText, // Fondo claro para contraste
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Para Android
        padding: 15,
        marginBottom: 10,
    }, 
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textBlack, // Texto oscuro para contraste
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: COLORS.blackBg, // Texto gris para descripción
    }, 
    selected: {
        backgroundColor: COLORS.bluegreen, // Cambia el color de fondo para resaltar
        borderWidth: 2, // Borde más grueso
        borderColor: COLORS.bluegreen, // Color del borde
        shadowColor: COLORS.bluegreen, // Sombra con un color que resalte
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6, // Elevación para Android
    }
})