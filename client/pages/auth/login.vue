<script setup lang="ts">
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

const form = reactive({
  email: '',
  password: ''
})
const loading = ref(false)

const { mutate: loginMutate } = useMutation(LOGIN_MUTATION)

async function handleLogin() {
  loading.value = true
  try {
    const result = await loginMutate({
      email: form.email,
      password: form.password
    })

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
  <div class="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
    <UCard class="w-full max-w-sm">
      <template #header>
        <div class="text-center space-y-1">
          <h1 class="text-xl font-semibold">
            Sign in
          </h1>
          <p class="text-sm text-muted">
            Enter your credentials to continue
          </p>
        </div>
      </template>

      <UForm
        :state="form"
        class="space-y-4"
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
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Password"
          name="password"
        >
          <UInput
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            autocomplete="current-password"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          class="w-full justify-center"
          :loading="loading"
        >
          Sign in
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>
