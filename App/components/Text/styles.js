import EStyleSheet from "react-native-extended-stylesheet";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 10;

export default EStyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "90%",
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 11
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: "$inputText"
  }
});
