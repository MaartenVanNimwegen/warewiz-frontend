<template>
  <div>
    <h1>WareWiz</h1>
    <button @click="fetchItems">Fetch Items</button>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { getItems } from '@/services/api';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchItems() {
      getItems()
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('Error fetching items', error);
        });
    },
  },
};
</script>
