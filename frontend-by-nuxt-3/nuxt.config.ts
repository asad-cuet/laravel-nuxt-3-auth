// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/profile': { ssr: false },
        '/login': { ssr: false }
      },
    modules: [
        'nuxt-sanctum-auth'
        // ...
      ],
    nuxtSanctumAuth: {
        baseUrl: 'http://127.0.0.1:8000',
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
