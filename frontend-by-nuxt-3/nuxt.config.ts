// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-sanctum-auth'
        // ...
      ],
    nuxtSanctumAuth: {
        baseUrl: 'http://localhost:8000',
        endpoints: {
            csrf: '/sanctum/csrf-cookie',
            login: 'api/login',
            logout: 'api/logout',
            user: 'api/user'
        },
        redirects: {
            home: '/profile',
            login: '/login',
            logout: '/'
        }
    }

})




