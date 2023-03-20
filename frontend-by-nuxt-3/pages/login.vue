<template>
    <div>
        <h3>Login</h3>
        <form @submit.prevent="login" ref="loginForm">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" v-model="email">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" v-model="password">

            <input type="submit">
        </form>
    </div>
</template>


<script setup>
const { $sanctumAuth } = useNuxtApp()
const router = useRouter()
const errors = ref([])

const email=ref('test@gmail.com')
const password=ref('password')

async function login (){
  try {
    await $sanctumAuth.login(
      {
        email: email.value,
        password: password.value
      },
      // optional callback function
      (data) => {
        console.log(data)
        router.push('/profile')
      }
    )
  } catch (e) {
    // your error handling
    errors.value = e.errors
  }
}

// Pages available only when not logged in
definePageMeta({
  middleware: 'guest'
})
</script>
  