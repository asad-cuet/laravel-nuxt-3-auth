<template>
  <div>
    Is user logged in?
    <sapn>{{ loggedIn ? 'yes' : 'no' }}</sapn>
  </div>
  <div v-if="loggedIn">
    User Name
    <sapn>{{ user.name }}</sapn>
  </div>
</template>

<script setup>
const { user, loggedIn } = useState('auth').value

// Pages available only when logged in
definePageMeta({
  middleware: 'auth'
})

</script>