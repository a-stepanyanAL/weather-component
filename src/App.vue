<template>
  <v-app>
    <v-main>
      <WeatherComponent />
    </v-main>
  </v-app>
</template>

<script>
import WeatherComponent from "./components/WeatherComponent";

export default {
  name: "App",

  components: {
    WeatherComponent,
  },

  data: () => ({
    //
  }),
};
</script>
