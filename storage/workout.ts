import { containsKey, storeData, getData, removeItem } from ".";
import data from "../data.json";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getWorkouts();
  const workout = workouts.filter((w) => w.slug === slug)[0];
  return workout;
};
export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = containsKey("workout-data");
  if (!hasWorkouts) {
    await storeData("workout-data", data);
    return true;
  }
  await storeData("workout-data", data);
  return false;
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
