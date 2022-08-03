import { React, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';

const TEST = () => {
  const [testObjArray, setTestObjArray] = useState([{reference: 'Matthew 5:5'}]);

  useEffect(() => console.log('new value: ', testObjArray), [testObjArray])

  useEffect(() => {
    const testUpdate = [{reference: 'Hosea 2:2'}]
    setTestObjArray(testUpdate);
  }, []);

  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Paragraph>{JSON.stringify(testObjArray)}</Paragraph>
    </View>
  );
};

export { TEST };
