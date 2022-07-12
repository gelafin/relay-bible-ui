import { React } from 'react';
import { Appbar } from 'react-native-paper';

// custom
import { layoutStyles } from '../../assets/stylesheets/layouts';

const PageHeader = ({headingText}) => {
  return (
    <Appbar.Header style={layoutStyles.appBarBold}>
      <Appbar.Content title={headingText} />
    </Appbar.Header>
  );
}
  
export { PageHeader };
