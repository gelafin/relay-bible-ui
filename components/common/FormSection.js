import { React } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel } from './FormLabel';

const FormSection = ({label, children}) => (
  <>
    <FormLabel label={label}></FormLabel>
    <View style={[styles.border, styles.padding]}>
      {children}
    </View>
  </>
);

const styles = StyleSheet.create({
  border: {
    borderColor: '#e5e5e5',
    borderLeftWidth: '1px'
  },
  padding: {
    paddingLeft: '10px'
  }
});

export { FormSection };
