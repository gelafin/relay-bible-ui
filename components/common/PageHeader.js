import { React } from 'react';
import { Appbar } from 'react-native-paper';

// custom
import { layoutStyles } from '../../assets/stylesheets/layouts';

const PageHeader = ({headingText}) => {
  // TODO: import goBack
  const goBack = () => console.log('back button pressed');

  return (
    <Appbar.Header style={layoutStyles.appBar}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={headingText} />
    </Appbar.Header>
  );
}
  
export { PageHeader };
