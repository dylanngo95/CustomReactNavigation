import React from 'react';
import { NavigationProvider } from './NavigationContextCustom';

export default class SceneViewCustom extends React.PureComponent {
  render() {
    const { screenProps, component: Component, navigation } = this.props;
    return (
      <NavigationProvider value={navigation}>
        <Component screenProps={screenProps} navigation={navigation} />
      </NavigationProvider>
    );
  }
}
