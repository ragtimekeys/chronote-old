import React, { Component } from "react";
import { FlatList, Text, AsyncStorage } from "react-native";

import ListItem from "../components/listItem";

export default class Routines extends Component {
  state = {
    loading: true,
    routines: [{ key: "test" }]
  };

  async componentDidMount() {
    const json = await AsyncStorage.getItem("Chronote.routines");
    if (json != null) {
      const routines = JSON.parse(json);
      this.setState({
        routines,
        loading: false
      });
    } else {
      this.setState({ loading: false });
    }
  }

  render() {
    return this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <FlatList
        data={this.state.routines}
        renderItem={({ item }) => <ListItem>{item.key}</ListItem>}
      />
    );
  }
}
