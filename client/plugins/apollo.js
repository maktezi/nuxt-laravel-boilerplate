export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('apollo:auth', ({ client, token }) => {
    const authToken = useCookie('auth_token')
    token.value = authToken.value ?? null
  })
})
