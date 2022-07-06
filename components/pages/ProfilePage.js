import { React } from 'react';
import { Text } from 'react-native';

const ProfilePage = ({ yourNumbers }) => {
  return (
    <div>
      <Text>hi</Text>
      {
        yourNumbers.map(currentNumber => (
          <Text key={currentNumber}>{currentNumber}</Text>
        ))
      }
    </div>
  );
}

export default ProfilePage;
