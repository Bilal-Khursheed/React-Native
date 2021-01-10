// Import the screens
import Main from "./Main";
import Chat from "./Chat";
// Import React Navigation
import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";
import React from "react";

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
const Apps = createAppContainer(navigator);

// Export it as the root component
export default class chathome extends React.Component {
  render() {
    return <Apps />;
  }
}
