<script setup lang="ts">
definePageMeta({ layout: false })

const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                name
                email
            }
        }
    }
`

const router = useRouter()
const token = useCookie('auth_token', { maxAge: 60 * 60 * 24 * 7 })
const user = useState('user')
const toast = useToast()

const form = reactive({ email: '', password: '' })
const loading = ref(false)
const showPassword = ref(false)

const { mutate: loginMutate } = useMutation(LOGIN_MUTATION)

async function handleLogin() {
  loading.value = true
  try {
    const result = await loginMutate({ email: form.email, password: form.password })
    const payload = result?.data?.login
    if (payload?.token) {
      token.value = payload.token
      user.value = payload.user
      await router.push('/dashboard')
    }
  } catch (err) {
    toast.add({
      title: 'Login Failed',
      description: err.message || 'Invalid credentials.',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-dvh">
    <!-- Left panel: branding -->
    <div class="hidden md:flex flex-col justify-between bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 p-10 relative overflow-hidden border-r border-gray-200 dark:border-gray-800">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute bottom-1/3 right-1/4 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <!-- Brand -->
      <div class="flex items-center gap-1.5 relative z-10">
        <span class="text-sm font-mono font-medium text-blue-500 dark:text-blue-400">Nuxt</span>
        <span class="text-gray-400 dark:text-gray-600">+</span>
        <span class="text-sm font-mono font-medium text-red-500 dark:text-red-400">Laravel</span>
        <span class="text-gray-400 dark:text-gray-600">+</span>
        <span class="text-sm font-mono font-medium text-pink-500 dark:text-pink-400">GraphQL</span>
      </div>

      <!-- Copy -->
      <div class="relative z-10 space-y-4">
        <div class="flex flex-col gap-2">
          <UBadge
            color="neutral"
            variant="subtle"
            class="w-fit font-mono text-xs"
          >
            v1.0.0
          </UBadge>
          <h2 class="text-3xl font-semibold leading-snug text-gray-900 dark:text-gray-50">
            Full-stack starter,<br>
            <span class="text-blue-500 dark:text-blue-300">ready to ship.</span>
          </h2>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-500 max-w-xs leading-relaxed">
          Nuxt 4 · Laravel 12 · Lighthouse · Apollo Client · Laravel Passport
        </p>
      </div>

      <!-- Dot grid -->
      <div class="grid grid-cols-6 gap-2.5 absolute right-10 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <span
          v-for="n in 24"
          :key="n"
          class="w-1 h-1 rounded-full bg-blue-400"
        />
      </div>
    </div>

    <!-- Right panel: form -->
    <div class="flex flex-col min-h-dvh md:min-h-0 bg-white dark:bg-gray-950 px-6 py-8">
      <!-- Top bar: mobile brand + color mode toggle -->
      <div class="flex items-center justify-between mb-auto">
        <!-- Back to home -->
        <UButton
          to="/"
          variant="outline"
          color="neutral"
          icon="i-lucide-arrow-left"
          size="sm"
        >
          Back
        </UButton>

        <UColorModeButton />
      </div>

      <!-- Centered form -->
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-sm space-y-8">
          <div class="space-y-1">
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              Sign in
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Enter your credentials to continue
            </p>
          </div>

          <UForm
            :state="form"
            class="space-y-5"
            @submit.prevent="handleLogin"
          >
            <UFormField
              label="Email"
              name="email"
            >
              <UInput
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                autocomplete="email"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="Password"
              name="password"
            >
              <UInput
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                autocomplete="current-password"
                size="lg"
                class="w-full"
              >
                <template #trailing>
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer flex items-center"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    @click="showPassword = !showPassword"
                  >
                    <UIcon
                      :name="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                      class="size-4"
                    />
                  </button>
                </template>
              </UInput>
            </UFormField>

            <UButton
              type="submit"
              size="lg"
              class="w-full justify-center"
              :loading="loading"
            >
              Sign in
            </UButton>
          </UForm>

          <p class="text-center text-xs text-gray-400 dark:text-gray-600 font-mono">
            nuxt · laravel · graphql
          </p>
        </div>
      </div>

      <!-- Bottom spacer to balance top bar -->
      <div class="mt-auto pt-8" />
    </div>
  </div>
</template>
