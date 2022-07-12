import { React } from 'react';
import { Appbar } from 'react-native-paper';

// custom
import { layoutStyles } from '../../assets/stylesheets/layouts';

const PageHeader = ({headingText}) => {
  // TODO: import goBack here if not in ContextHeader
  const goBack = () => console.log('back button pressed');

  return (
    <Appbar.Header style={layoutStyles.appBarBold}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={headingText} />
    </Appbar.Header>
  );
}
  
export { PageHeader };
