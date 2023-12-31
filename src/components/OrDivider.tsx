import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../assets/theme';

export const OrDivider = () => {
  return (
    <View style={styles.orDividerContainer}>
      <View style={styles.orDividerLine} />
      <Text style={styles.orDividerText}>OR</Text>
      <View style={styles.orDividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  orDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.whiteText,
  },
  orDividerText: {
    marginHorizontal: 10,
    color: COLORS.whiteText,
  },
});
