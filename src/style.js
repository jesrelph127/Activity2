import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  head: {
    backgroundColor: "#121212",
    flexDirection: "row",
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  body: {
    backgroundColor: "#121212",
    flex: 1,
  },
  hey: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  hey1: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    borderRadius: 5,
  },
  hey2: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
  },
  hey3: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    gap: 10,
  },
  rows1: {
    flexDirection: "row",
    padding: 20,
    gap: 10,
  },
  rows2: {
    flexDirection: "column",
    gap: 5,
  },
  rows3: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingRight: 15,
    gap: 5,
  },
  foot: {
    height: 60,
    paddingTop: 10,
    backgroundColor: "#00000080",
    flexDirection: "row",
    justifyContent: "space-around",
    opacity: 1.5,
  },
  foot1: {
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flexDirection: "row",
    marginTop: 30,
    paddingLeft: 20,
    gap: 10,
  },
  greet: {
    flex: 1,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 20,
    marginRight: 20,
  },
  music: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    color: "white",
  },
  title1: {
    color: "#b3b3b3",
  },
  title: {
    color: "white",
  },
  titles: {
    color: "white",
  },
  pop: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 35,
  },
  titles1: {
    color: "#bdbdbd",
    fontSize: 10,
  },
  titles2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
