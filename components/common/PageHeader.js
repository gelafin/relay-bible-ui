import { React } from 'react';
import { Text, StyleSheet } from 'react-native';

const PageHeader = ({headingText}) => {
  return (
    <Text style={styles.headingText}>{headingText}</Text>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: '2rem'
  },
});
  
export default PageHeader;
