<script setup lang="ts">
const auth = useAuth()
const isAuthenticated = computed(() => auth.isAuthenticated.value)
</script>

<template>
    <div class="flex flex-col min-h-dvh">
        <header class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/6">
            <div class="flex items-center gap-2 text-[12px]">
                <span class="text-[#6EE7B7] font-medium">nuxt</span>
                <span class="text-gray-300 dark:text-gray-700">+</span>
                <span class="text-[#F87171] font-medium">laravel</span>
                <span class="text-gray-300 dark:text-gray-700">+</span>
                <span class="text-[#C084FC] font-medium">graphql</span>
            </div>
            <div class="flex items-center gap-3">
                <UColorModeButton size="xs" />
                <UButton
                    v-if="!isAuthenticated"
                    to="/login"
                    size="xs"
                    color="neutral"
                    variant="outline"
                    class="text-[11px] tracking-wide"
                >
                    Sign in
                </UButton>
            </div>
        </header>
        <div class="flex-1">
            <slot />
        </div>
        <!-- ── Footer ───────────────────────────────────────────── -->
        <footer class="text-center px-6 py-5 text-[10px] text-gray-700 dark:text-gray-400 tracking-widest border-t border-gray-100 dark:border-white/[0.05]">
            mit license · nuxt · laravel · graphql
        </footer>
    </div>
</template>
