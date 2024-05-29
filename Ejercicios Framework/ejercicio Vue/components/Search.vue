<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Buscar..." />
    <div v-for="member in filteredItems" :key="member.id">
      {{ member.login }}
      <img :src="member.avatar_url" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const searchTerm = ref('');
const items = ref([]);

// Obtén los datos de la API al cargar el componente
onMounted(async () => {
  try {
    const response = await axios.get('https://api.github.com/orgs/lemoncode/members');
    items.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    return item.name.includes(searchTerm.value);
  });
});

export { searchTerm, filteredItems };
</script>