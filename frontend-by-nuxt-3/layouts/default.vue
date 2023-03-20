<template>
    <div>
        <nav>
            <NuxtLink to="/">home</NuxtLink>
            <div v-if="!loggedIn">
                <NuxtLink to="/login">Login</NuxtLink>
            </div>

            <div v-else>
                <NuxtLink to="/profile">Profile</NuxtLink>
                <button @click="logout">Logout</button>
            </div>
        </nav>
        <slot></slot>
    </div>
</template>
<script setup>
const { loggedIn } = useState('auth').value
const { $sanctumAuth } = useNuxtApp()
const router = useRouter()

const logout = async () => {
  await $sanctumAuth.logout(
    // optional callback function
    (data) => {
      console.log(data)
      router.push('/')
    }
  )
}

</script>
  