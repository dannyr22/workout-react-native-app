import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Planner">;

export default function PlannerScreen({ navigation }: Props) {
  useEffect(() => {
    console.log("rendering planner screen");
  }, []);
  return (
    <View>
      <Text>I am Planner Screen</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
