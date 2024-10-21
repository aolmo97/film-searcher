import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Popular Movies",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        options={{
          title: "Details",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ActorDetails"
        options={{
          title: "Actor Details",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
