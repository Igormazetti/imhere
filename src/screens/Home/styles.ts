import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    padding: 24,
  },
  texto: {
    color: "#FFF",
    fontSize: 24,
    marginTop: 48,
  },
  subTexto: {
    color: "#6B6B6B",
    fontSize: 18,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 18,
  },
  btnText: {
    color: "#FFF",
    fontSize: 36,
  },
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 36,
  },
  empty: {
    color: "#6B6B6B",
    textAlign: "center",
    fontSize: 16,
  },
});
