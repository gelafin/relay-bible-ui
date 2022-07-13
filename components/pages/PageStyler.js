import { React } from 'react';
import { View } from 'react-native';

import { layoutStyles } from '../../assets/stylesheets/layouts';

const PageStyler = ({children, customPageStyle}) => (
  <View style={[layoutStyles.page, customPageStyle]}>
    <View style={layoutStyles.pageMargins}>{children}</View>
  </View>
);

export { PageStyler };
