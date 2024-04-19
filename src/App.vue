<template>
  <div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 mx-auto">
    <FormLogin />
  </div>
  <div v-else class="text-center">
    <h2>Bienvenido, {{ userStore.state.name }}</h2>
    <NewSite/>
    <button class="btn btn-secondary" @click="userStore.logout()">
      Salir
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import userStore from '@/store/user'
import FormLogin from '@/components/FormTest.vue'
import NewSite from '@/components/NewSite.vue'

export default defineComponent({
  name: 'App',
  components: { FormLogin, NewSite },
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  }
})
</script>