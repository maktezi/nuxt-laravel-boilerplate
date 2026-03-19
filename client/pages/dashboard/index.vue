<script setup lang="ts">
const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
    }
  }
`

const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      message
    }
  }
`

const router = useRouter()
const token = useCookie('auth_token')
const user = useState('user', () => null) // always provide default factory
const toast = useToast()

const { result, loading, error } = useQuery(ME_QUERY, null, {
  fetchPolicy: 'cache-and-network',
  enabled: computed(() => !!token.value) // don't run if no token
})

// Sync query result into global state
watch(result, (val) => {
  if (val?.me) user.value = val.me
}, { immediate: true })

// If token expired or unauthorized, kick back to login
watch(error, (val) => {
  if (val) {
    token.value = null
    user.value = null
    router.push('/login')
  }
})

const { mutate: logoutMutate, loading: logoutLoading } = useMutation(LOGOUT_MUTATION)

async function handleLogout() {
  try {
    await logoutMutate()
  } catch (_) {
    // continue regardless
  } finally {
    token.value = null
    user.value = null
    await router.push('/login')
  }
}
</script>

<template>
  <UContainer class="py-10">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-semibold">
          Dashboard
        </h1>
        <p class="text-sm text-muted mt-0.5">
          Welcome back!
        </p>
      </div>
      <UButton
        color="neutral"
        variant="outline"
        icon="i-lucide-log-out"
        :loading="logoutLoading"
        @click="handleLogout"
      >
        Logout
      </UButton>
    </div>

    <!-- Profile Card -->
    <UCard>
      <template #header>
        <h2 class="text-base font-medium">
          Your Profile
        </h2>
      </template>

      <div
        v-if="loading"
        class="space-y-3"
      >
        <USkeleton class="h-4 w-1/3" />
        <USkeleton class="h-4 w-1/2" />
        <USkeleton class="h-4 w-1/4" />
      </div>

      <div
        v-else-if="result?.me"
        class="space-y-2 text-sm"
      >
        <div class="flex gap-2">
          <span class="text-muted w-16">Name</span>
          <span class="font-medium">{{ result.me.name }}</span>
        </div>
        <div class="flex gap-2">
          <span class="text-muted w-16">Email</span>
          <span class="font-medium">{{ result.me.email }}</span>
        </div>
        <div class="flex gap-2">
          <span class="text-muted w-16">ID</span>
          <span class="font-medium text-muted">{{ result.me.id }}</span>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
