import { React } from 'react';
import { Appbar } from 'react-native-paper';

// custom
import { layoutStyles } from '../../assets/stylesheets/layouts';

const PageHeader = ({headingText, onFilterPress, onNewPress}) => {
  return (
    <Appbar.Header style={layoutStyles.appBarBold}>
      <Appbar.Content title={headingText} />
      {onNewPress && <Appbar.Action icon="plus" onPress={onNewPress} />}
      {onFilterPress && <Appbar.Action icon="filter" onPress={onFilterPress} />}
    </Appbar.Header>
  );
}
  
export { PageHeader };
