<template>
  <div>
    <NuxtLink to="/" class="back"> Go back</NuxtLink>
    <p><span class="grey-text">Imagen: </span></p>
    <img :src="product?.avatar_url" alt="" />
    <div v-if="member">

      <p><span class="grey-text">Nombre:</span>{{ member.name }}</p>
      <p><span class="grey-text">Email:</span>{{ member.email }}</p>
      <p><span class="grey-text">Bio:</span>{{ member.bio }}</p>
      <p><span class="grey-text">Organización:</span>{{ local() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Memberservice2 } from '../../services/members'
import type { UsersEntity } from '../../types'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore(); // Obtener localStorage

const route = useRoute()
const detail = route.params.detail as string

const { data: product } = useAsyncData<UsersEntity>(() =>
  Memberservice2.MemberDetail(detail)
)

const local =()=> {
  const storage=localStorage.getItem("searchTerm");
  return storage;
}

let member: MembersEntity | null= null

if (product) {member= product}
</script>