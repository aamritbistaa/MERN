import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import obj1 from "./Map_component";

export default function App() {
  const a = obj1.filter((i) => i.id == 1)[0];
  console.log(a);
  console.log(typeof obj1);

  const obj2 = Object.entries(obj1)
  const filteredobj2 = obj2.filter(([key, value]) => typeof value === 'string');
  console.log('string of obj1',filteredobj2.class)

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headstyle}>Cat Image</Text>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>List of students</Text>
        <ScrollView>
        <Text style={{fontSize:16}}>
          ID:
          {
            // obj1.filter((i)=>i.id==1)
            // a.id
            // obj1[0].id
            '\n'
          }
          Name:
          {
            obj1.map((i)=>i.name)
          
          /* {a.name} */
            
          }
          {'\n'}
          Class:
          {
            obj1[j].class
          // a.class
          }
        </Text>
        </ScrollView>
      </View>
      <View style={styles.container}>
        <Text style={styles.textstyle}>Siuri</Text>
        <StatusBar style="auto" />
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    </View>
  );
}
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
    color: "red",
    // height:height,
    // height:200
  },
  headstyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
  },
  textstyle: {
    color: "white",
    fontSize: 22,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
