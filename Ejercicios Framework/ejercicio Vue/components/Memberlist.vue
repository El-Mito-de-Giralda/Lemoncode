<template>
  <div>
    <label for="org">Búsqueda</label>
    <input type="search" v-model="org" name="org" id="org" @input="onOrgInputChange">
    <button type="submit" @click="buscar">Buscar</button>

    <ul>
      <li v-for="member in list" :key="member.login">
        {{ member.login }}
        <p>
          <span class="grey-text">Imagen: </span>
          <NuxtLink :to="`/detail/${member.login}`">
            <img :src="member.avatar_url" style="cursor: pointer"/>
          </NuxtLink>
        </p>
        <p><span class="grey-text">Id: </span>{{ member.id }}</p>
      </li>
    </ul>  
  </div>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Memberservice2 } from '../services/members';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
 
const org = ref('');
const DefaultOrg = "lemoncode";
const list = ref([]);

const buscar = async () => {
  const searchTerm = org.value || DefaultOrg;
  const response = await Memberservice2.get(searchTerm);
  list.value = response;
}

const navigateToDetail = (login) => {
    router.push(`/detail/${login}`);
}
 
const onOrgInputChange = (event) => {
  const searchTerm = event.target.value;
  if (process.client) {
    localStorage.setItem('searchTerm', searchTerm);
    store.dispatch('updateSearchTerm', searchTerm);
  }
}

onMounted(() => {
  if (process.client) {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      org.value = savedSearchTerm;
    }
    buscar();
  }
})

</script>


<style lang="scss" scoped>
.product-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}

.product-container__content {
  padding: 0 1em;
}

.product-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>