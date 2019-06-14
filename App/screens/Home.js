import React, { Component } from "react";
import { Text } from "react-native";

import { Container } from "../components/Container";
import { TextInput } from "../components/Text";

import { strings } from '../locales/i18n'

class Home extends Component {

  render() {
    console.log("Home render");
    return (
      <Container>
        <TextInput placeholder={strings("user_profile.firstNamePlaceholder")} />
        <TextInput placeholder={strings("user_profile.lastNamePlaceholder")} />
      </Container>
    );
  }
}

export default Home;
