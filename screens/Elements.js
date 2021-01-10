import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from "react-native";
// Galio components
import { Block, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Select, Icon, Input, Header, Switch } from "../components/";
import { Button } from "galio-framework";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status1: "Panding",
      status2: "Panding",
      status3: "Panding",
      status4: "Panding",
      tableHead: ["Name", "Mobile", "Address", "", ""],
      tableData: [
        ["Ali", "033217482734", "Comsats university Islamabad"],
        ["Bilal", "032487243754", "DHokh Paracha, Rawalpindi"],
        ["Umer", "03435527709", "Nasir Colony, Rawalpindi"],
        ["Usman", "03457838728", "Shah Khalid Colony Rawalpindi"],
      ],
    };
  }
  _alertIndex(index) {
    var data = "status" + index;
    this.setState({
      status1: "Deliver",
    });
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const { navigation } = this.props;
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{this.state.status}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30, width }}
        >
          <View style={styles.container}>
            <Table borderStyle={{ borderColor: "transparent" }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              {state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      textStyle={styles.text}
                    />
                  ))}
                  <Button
                    onPress={() => this._alertIndex(index)}
                    style={{
                      width: 50,
                      height: 18,
                      marginLeft: 0,
                      padding: 0,

                      backgroundColor: "green",
                    }}
                  >
                    {this.state.status1}
                  </Button>
                  <Button
                    onPress={() => navigation.navigate("Track")}
                    style={{
                      width: 50,
                      height: 18,
                      marginLeft: 0,
                      padding: 0,
                      backgroundColor: "red",
                    }}
                  >
                    Track
                  </Button>
                </TableWrapper>
              ))}
            </Table>
          </View>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: {
    height: 40,
    backgroundColor: "#808B97",
    margin: 2,
    padding: 2,
    marginLeft: 0,
  },
  text: { margin: 2, padding: 2, marginLeft: 0 },
  row: { flexDirection: "row", padding: 2, backgroundColor: "#FFF1C1" },
  btn: { width: 50, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" },
});
export default Elements;
