<template>
    <form @submit.prevent="onSubmit">
      <div class="form-group my-2">
        <label>Usuario</label>
        <input
          v-model="form.username"
          class="form-control"
          placeholder="Usuario"
          required
          autocomplete="username"
        />
      </div>
      <div class="form-group my-2">
        <label>Contraseña</label>
        <input
          v-model="form.password"
          class="form-control"
          type="password"
          placeholder="Contraseña"
          required
          autocomplete="current-password"
        />
      </div>
      <div class="text-danger my-2">{{ userStore.state.error }}</div>
      <button class="btn btn-success btn-block my-2" type="submit">Iniciar sesión</button>
    </form>
  </template>
  <script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import userStore from '@/store/user'
  
  export default defineComponent({
    setup() {
      const form = reactive({
        username: '',
        password: ''
      })
  
      const onSubmit = () => {
        userStore.login(form.username, form.password)
        form.username = ''
        form.password = ''
      }
  
      return { form, userStore, onSubmit }
    }
  })
  </script>

<style scoped>

form {
  width: 250px;
}

</style>