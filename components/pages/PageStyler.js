import { React } from 'react';
import { View } from 'react-native';

import { layoutStyles } from '../../assets/stylesheets/layouts';

const PageStyler = ({children}) => (
  <View style={layoutStyles.page}>
    <View style={layoutStyles.pageMargins}>{children}</View>
  </View>
);

export { PageStyler };
