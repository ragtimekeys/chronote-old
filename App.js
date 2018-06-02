import Main from "./src/main";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import * as theme from "./src/theme";

// jimmy is a faggot


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
  }
}
