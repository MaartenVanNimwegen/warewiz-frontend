<template>
  <div>
    <h1>Fetch Locations</h1>
    <button @click="fetchLocations">Fetch Locations</button>
    <div v-if="locations.length > 0">
      <h2>Locations:</h2>
      <li v-for="location in locations" :key="location.id">
        {{ location.name }}
      </li>
    </div>
    <div v-else>
      <p>No locations fetched yet. Click the button above.</p>
    </div>
  </div>
</template>

<script>
import { getLocations } from "../services/api.js"; // Replace with the actual path to your API module

export default {
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    async fetchLocations() {
      try {
        const response = await getLocations();
        this.locations = response.data;
        console.log("Locations:", this.locations);
        // Handle the data as needed
      } catch (error) {
        console.error("Error fetching locations:", error);
        // Handle errors
      }
    },
  },
};
</script>
