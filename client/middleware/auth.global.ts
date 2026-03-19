export default defineNuxtRouteMiddleware((to, _from) => {
  const token = useCookie('auth_token')
  const toPath = to.path.toLowerCase()

  const authRoutes = ['/auth/login', '/auth/register']
  const publicRoutes = ['/', '/notfound', ...authRoutes]
  authRoutes.includes(toPath)
  const isPublicRoute = publicRoutes.includes(toPath)

  // Already heading to login — stop here, no further checks
  if (toPath === '/auth/login') {
    // If authenticated and going to login, redirect to dashboard
    if (token.value) return navigateTo('/dashboard')
    return
  }

  // No token and trying to access a protected route
  if (!token.value && !isPublicRoute) {
    return navigateTo('/auth/login')
  }

  // Validate route exists (skip for dynamic routes handled by Nuxt)
  const router = useRouter()
  const validRoutes = router.getRoutes().map(r => r.path.toLowerCase())
  const isDynamic = router.getRoutes().some((r) => {
    const regex = new RegExp('^' + r.path.replace(/:[^/]+/g, '[^/]+') + '$')
    return regex.test(toPath)
  })

  if (!validRoutes.includes(toPath) && !isDynamic && toPath !== '/notfound') {
    return navigateTo('/notfound')
  }
})
