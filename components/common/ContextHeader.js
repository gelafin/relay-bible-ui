import { React } from 'react';
import { Appbar } from 'react-native-paper';

// custom
import { layoutStyles } from '../../assets/stylesheets/layouts';

const ContextHeader = ({headingText, customHeadingComponent}) => {
  return (
    <Appbar.Header style={[layoutStyles.appBar, layoutStyles.appBarSmall]}>
      {
        customHeadingComponent ||
        <Appbar.Content title={headingText} titleStyle={layoutStyles.appBarSmallText} />
      }
    </Appbar.Header>
  );
}
  
export { ContextHeader };