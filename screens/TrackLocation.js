import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status != "granted") {
      console.log("Permission denied");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };

    this.setState({ region: region });
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          title="Delivery Boy"
          showCompass={true}
          rotateEnabled={true}
          style={{ flex: 1 }}
        >
          <Marker
            coordinate={{ latitude: 33.6475524, longitude: 73.1652164 }}
            title="Bilal's"
          ></Marker>
          {/* <Marker
            coordinate={{ latitude: 33.5675524, longitude: 73.1652164 }}
            title="Umer's"
          ></Marker> */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
