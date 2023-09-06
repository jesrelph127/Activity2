import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import { styles } from "./src/style.js";
import {
  MaterialIcons as Icon,
  AntDesign as Icons,
  Ionicons as Iconss,
  MaterialCommunityIcons as Icon1,
  Entypo as Icon2,
} from "react-native-vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.greet}>Good Morning</Text>
        <Icon name="notifications-none" size={35} color="white" />
        <Icons
          style={styles.icon}
          name="clockcircleo"
          size={30}
          color="white"
        />
        <Icons name="setting" size={30} color="white" />
      </View>
      <View style={styles.body}>
        <View style={styles.top}>
          <Text style={styles.music}>Music</Text>
          <Text style={styles.music}>Podcasts & Shows</Text>
        </View>
        <View style={styles.hey}>
          <View style={styles.hey1}>
            <Image
              source={require("./src/img2.jpeg")}
              style={{ width: 60, height: 50, resizeMode: "stretch" }}
            />
            <View style={styles.hey3}>
              <Text style={styles.titles}>Bee Gees</Text>
            </View>
          </View>
          <View style={styles.hey2}>
            <Image
              source={require("./src/img1.jpeg")}
              style={{ width: 60, height: 50, resizeMode: "stretch" }}
            />
            <View style={styles.hey3}>
              <Text style={styles.titles}>The Outfield-    Greatest Hits</Text>
            </View>
          </View>
        </View>
        <Text style={styles.pop}>Popular Radio</Text>
        <View style={styles.rows}>
          <Image
            source={require("./src/img8.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
          <Image
            source={require("./src/img7.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
        </View>
        <View style={styles.rows1}>
          <Image
            source={require("./src/img3-modified.png")}
            style={{ width: 50, height: 50, resizeMode: "stretch" }}
          />
          <View style={styles.rows2}>
            <Text style={styles.titles1}>MORE LIKE</Text>
            <Text style={styles.titles2}>The Outfield</Text>
          </View>
        </View>
        <View style={styles.rows3}>
          <Image
            source={require("./src/img6.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
          <Image
            source={require("./src/img5.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
        </View>
      </View>
      <View style={styles.foot}>
        <View style={styles.foot1}>
          <Icon1 name="home-variant" size={30} color="white" />
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.foot1}>
          <Icons name="search1" size={30} color="white" />
          <Text style={styles.title}>Search</Text>
        </View>

        <View style={styles.foot1}>
          <Iconss name="library-outline" size={30} color="white" />
          <Text style={styles.title}>Your Library</Text>
        </View>
        <View style={styles.foot1}>
          <Icon2 name="spotify" size={30} color="white" />
          <Text style={styles.title}>Premium</Text>
        </View>
      </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
        translucent={true}
      />
    </View>
  );
}
