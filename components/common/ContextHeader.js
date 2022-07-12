import { React } from 'react';
import { Appbar } from 'react-native-paper';

// custom
import { layoutStyles } from '../../assets/stylesheets/layouts';

const ContextHeader = ({headingText}) => {
  // TODO: import goBack here if not in PageHeader
  const goBack = () => console.log('back button pressed');

  return (
    <Appbar.Header style={[layoutStyles.appBar, layoutStyles.appBarSmall]}>
      {/* <Appbar.BackAction onPress={goBack} /> */}
      <Appbar.Content title={headingText} titleStyle={layoutStyles.appBarSmallText} />
    </Appbar.Header>
  );
}
  
export { ContextHeader };