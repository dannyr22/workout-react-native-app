import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
// import { MontserratText } from "../components/styled/MontserratText";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { useWorkouts } from "../hooks/useWorkouts";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const workouts = useWorkouts();
  return (
    <View style={styles.container}>
      {/* <MontserratText style={{ fontSize: 30 }}>New Workouts</MontserratText> */}
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item: Workout) => item.slug}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetails", {
                  slug: item.slug,
                })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
