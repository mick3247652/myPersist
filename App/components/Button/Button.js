import React from "react";
import { View, Button } from "react-native";

import styles from "./styles";

export default props => (
  <View style={styles.container}>
    <Button {...props} />
  </View>
);
