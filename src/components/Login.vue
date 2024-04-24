<template>
    <form @submit.prevent="submitForm" class="shadow p-3 mb-5 bg-body rounded">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label" >Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios';

export default {
  emits: ['loginSuccess'],
  setup (props, {emit} ) {
    const email = ref('');
    const password = ref('');

// Inicializar ReCaptcha

    const submitForm  = async () => {
      try {
        const response = await axios({
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          url:'https://api.escuelajs.co/api/v1/auth/login',
          data:{
            email: email.value,
            password: password.value,
          },
        })
        const token = response.data.access_token
        emit('loginSuccess', token);            
      } catch (error) {
        console.log(error)
      }
    }
    return {
      email,
      password,
      submitForm
    }
  }
}
</script>

<style lang="scss" scoped>

</style>