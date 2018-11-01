import React, { Component } from 'react';
import { 
  View, Text,
  Button,
} from 'react-native';
import DrawerNavigatorCustom from './DrawerNavigatorCustom';
import { createBottomTabNavigator } from 'react-navigation';
import DrawerViewCustom from './DrawerViewCustom';

class TestDrawer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent 1</Text>
      </View>
    );
  }
}

class TestDrawer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent 2</Text>
        <Button
          title="Open"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}

const DawerNavigatorComponent = DrawerNavigatorCustom(
  {
    TestDrawer2: TestDrawer2,
  }
);

const Tabbar = createBottomTabNavigator(
  {
    TestDrawer1: TestDrawer1,
    DawerNavigator: DawerNavigatorComponent,
  }
);


export default class TestDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Tabbar />
    );
  }
}
