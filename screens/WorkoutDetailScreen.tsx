import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation";
import { useWorkoutsBySlug } from "../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";

type Props = NativeStackScreenProps<RootStackParamList, "WorkoutDetails">;

export default function WorkoutDetailScreen({ route }: Props) {
  const { slug }: { slug: string } = route.params;
  const workout = useWorkoutsBySlug(slug);

  if (!workout) {
    return null;
  }
  return (
    <View style={styles.container}>
      <WorkoutItem item={workout} childStyles={{ marginTop: 10 }}>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText onPress={handleOpen} text="Check Sequence" />
          )}
        >
          <View>
            {workout.sequence.map((si, idx) => (
              <View key={si.slug} style={styles.sequenceItem}>
                <Text>
                  {si.name} | {si.type} | {formatSec(si.duration)}
                </Text>
                {idx !== workout.sequence.length - 1 && (
                  <FontAwesome name="arrow-down" size={20} />
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      <View>
        <FontAwesome name="play-circle-o" size={100} />
      </View>
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
  sequenceItem: {
    alignItems: "center",
  },
});
