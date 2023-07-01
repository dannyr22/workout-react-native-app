import { useEffect, useState } from "react";

import { getWorkoutBySlug } from "../storage/workout";
import { Workout } from "../types/data";

export const useWorkoutsBySlug = (slug: string) => {
  const [workouts, setWorkout] = useState<Workout>();

  useEffect(() => {
    async function getData() {
      const _workout = await getWorkoutBySlug(slug);
      setWorkout(_workout);
    }
    getData();
  }, []);
  return workouts;
};
