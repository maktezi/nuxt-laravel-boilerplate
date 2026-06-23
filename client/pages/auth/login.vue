<script setup lang="ts">
definePageMeta({ layout: false })

const { login } = useAuth()
const toast = useToast()

const form = reactive({ email: '', password: '' })
const loading = ref(false)
const showPassword = ref(false)

async function handleLogin() {
  loading.value = true
  try {
    await login(form.email, form.password)
    await navigateTo('/dashboard')
  } catch (error) {
    toast.add({
      title: 'Login Failed',
      description: error instanceof Error ? error.message : 'Invalid credentials.',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-dvh">
    <!-- ── Left panel: terminal ─────────────────────────── -->
    <div class="hidden md:flex flex-col justify-between bg-[#0A0A0F] p-8">
      <!-- Terminal window -->
      <div class="flex flex-col">
        <!-- Chrome bar -->
        <div class="flex items-center gap-1.5 mb-5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span class="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span class="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span class="ml-auto text-[11px] text-[#444]">~/project — zsh</span>
        </div>

        <!-- Terminal lines -->
        <div class="flex flex-col text-[12.5px] leading-[1.9]">
          <div>
            <span class="text-[#555]">$ </span>
            <span class="text-[#6EE7B7]">composer install</span>
          </div>
          <div class="text-[#555]">
            Installing dependencies...
          </div>
          <div class="text-[#6EE7B7]">
            ✓ 142 packages installed
          </div>

          <div class="h-[0.6em]" />

          <div>
            <span class="text-[#555]">$ </span>
            <span class="text-[#6EE7B7]">php artisan passport:install</span>
          </div>
          <div class="text-[#6EE7B7]">
            ✓ Passport keys generated
          </div>
          <div class="text-[#A78BFA]">
            &nbsp; Client ID: 1 · Secret: ••••••••••
          </div>
          <div class="text-[#FCD34D]">
            ! Running in dev mode
          </div>

          <div class="h-[0.6em]" />

          <div>
            <span class="text-[#555]">$ </span>
            <span class="text-[#6EE7B7]">npm run dev</span>
          </div>
          <div>
            <span class="text-[#6EE7B7]">✓ Nuxt 4 ready on </span>
            <span class="text-[#A78BFA]">http://localhost:3000</span>
          </div>
          <div>
            <span class="terminal-cursor inline-block w-[7px] h-[13px] bg-[#6EE7B7] align-middle ml-0.5" />
          </div>
        </div>
      </div>

      <!-- Stack footer -->
      <div class="flex flex-col gap-2.5">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-[10px] px-2 py-0.5 rounded border border-[#6EE7B7]/40 text-[#6EE7B7] bg-[#6EE7B7]/[0.07]">Nuxt 4</span>
          <span class="text-[10px] px-2 py-0.5 rounded border border-[#F87171]/40 text-[#F87171] bg-[#F87171]/[0.07]">Laravel 12</span>
          <span class="text-[10px] px-2 py-0.5 rounded border border-[#C084FC]/40 text-[#C084FC] bg-[#C084FC]/[0.07]">GraphQL</span>
          <span class="text-[10px] px-2 py-0.5 rounded border border-[#A78BFA]/40 text-[#A78BFA] bg-[#A78BFA]/[0.07]">Passport</span>
        </div>
        <div class="flex items-center gap-1.5 text-[10px] text-[#444]">
          <span class="status-dot w-1.5 h-1.5 rounded-full bg-[#6EE7B7]" />
          v1.0.0 · ready to ship
        </div>
      </div>
    </div>

    <!-- ── Right panel: form ────────────────────────────── -->
    <div class="flex flex-col min-h-dvh md:min-h-0 bg-white dark:bg-[#0D0D12] px-6 py-6">
      <!-- Top bar -->
      <div class="flex items-center justify-between mb-auto">
        <UButton
          to="/"
          variant="ghost"
          color="neutral"
          size="xs"
          icon="i-lucide-arrow-left"
          class="text-[11px] lowercase tracking-wide"
        >
          back
        </UButton>
        <UColorModeButton size="xs" />
      </div>

      <!-- Centred form -->
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-[300px] flex flex-col gap-7">
          <!-- Heading -->
          <div class="flex flex-col gap-1">
            <h1 class="text-[22px] font-semibold tracking-tight text-gray-900 dark:text-gray-50">
              sign in
            </h1>
            <p class="text-[12px] text-gray-400 dark:text-gray-500">
              enter your credentials to continue
            </p>
          </div>

          <!-- Fields -->
          <UForm
            :state="form"
            class="flex flex-col gap-4"
            @submit.prevent="handleLogin"
          >
            <UFormField name="email">
              <template #label>
                <span class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  email
                </span>
              </template>
              <UInput
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                autocomplete="email"
                size="md"
                class="w-full text-[13px]"
              />
            </UFormField>

            <UFormField name="password">
              <template #label>
                <span class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  password
                </span>
              </template>
              <UInput
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                autocomplete="current-password"
                size="md"
                class="w-full text-[13px]"
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

            <!-- Submit -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full mt-1 py-2 px-4 rounded-md bg-[#6EE7B7] text-[#0A0A0F] text-[13px] font-semibold tracking-wide transition-opacity duration-150 hover:opacity-85 active:scale-[0.985] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {{ loading ? 'signing in...' : 'sign in →' }}
            </button>
          </UForm>

          <!-- Footer -->
          <p class="text-[10px] text-center text-gray-300 dark:text-gray-700 tracking-widest">
            nuxt · laravel · graphql · passport
          </p>
        </div>
      </div>

      <!-- Bottom spacer -->
      <div class="mt-auto pt-6" />
    </div>
  </div>
</template>

<style>
@keyframes terminal-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
}
@keyframes status-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
}
.terminal-cursor {
    animation: terminal-blink 1s step-end infinite;
}
.status-dot {
    animation: status-pulse 2.2s ease-in-out infinite;
}
</style>
