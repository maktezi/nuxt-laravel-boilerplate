<script setup lang="ts">
const { fetchMe, logout, user } = useAuth()

const { loading } = fetchMe()

const initials = computed(() => {
    const name = user.value?.name || ''
    return name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
})
</script>

<template>
    <UContainer class="py-10">
        <!-- Header -->
        <div class="flex items-center justify-between mb-10">
            <div class="space-y-0.5">
                <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                    Dashboard
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    nuxt · laravel · graphql
                </p>
            </div>
            <UButton
                color="neutral"
                variant="outline"
                icon="i-lucide-log-out"
                @click="logout"
            >
                Sign out
            </UButton>
        </div>

        <!-- Profile Card -->
        <UCard>
            <template #header>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-semibold shrink-0">
                        <template v-if="loading">
                            <USkeleton class="w-10 h-10 rounded-full" />
                        </template>
                        <template v-else>
                            {{ initials || '?' }}
                        </template>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-50 leading-tight">
                            <template v-if="loading">
                                <USkeleton class="h-3.5 w-24" />
                            </template>
                            <template v-else>
                                {{ user?.name }}
                            </template>
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            <template v-if="loading">
                                <USkeleton class="h-3 w-36 mt-1" />
                            </template>
                            <template v-else>
                                {{ user?.email }}
                            </template>
                        </p>
                    </div>
                </div>
            </template>

            <div
                v-if="loading"
                class="space-y-4"
            >
                <div
                    v-for="n in 3"
                    :key="n"
                    class="flex items-center gap-4"
                >
                    <USkeleton class="h-3.5 w-12" />
                    <USkeleton class="h-3.5 w-40" />
                </div>
            </div>

            <div
                v-else-if="user"
                class="divide-y divide-gray-100 dark:divide-gray-800"
            >
                <div class="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <span class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider w-14 shrink-0">Name</span>
                    <span class="text-sm text-gray-900 dark:text-gray-100">{{ user.name }}</span>
                </div>
                <div class="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <span class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider w-14 shrink-0">Email</span>
                    <span class="text-sm text-gray-900 dark:text-gray-100">{{ user.email }}</span>
                </div>
                <div class="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <span class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider w-14 shrink-0">ID</span>
                    <span class="text-sm font-mono text-gray-400 dark:text-gray-500">{{ user.id }}</span>
                </div>
            </div>
        </UCard>
    </UContainer>
</template>
