<script setup lang="ts">
definePageMeta({ layout: 'default' })
</script>

<template>
    <div class="min-h-[calc(95vh-70px)] flex flex-col">
        <main class="flex-1 flex flex-col items-center justify-center px-6 py-16 gap-6">
            <div class="flex flex-col items-center gap-3 text-center">
                <div class="flex items-center gap-1.5 text-[10px] px-3 py-1 rounded-full border border-[#6EE7B7]/30 text-[#6EE7B7] bg-[#6EE7B7]/6">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] status-dot" />
                    v1.0.0 · Ready to ship
                </div>

                <h1 class="text-[clamp(28px,5vw,48px)] font-semibold tracking-tight text-gray-900 dark:text-gray-50 leading-[1.15] max-w-xl">
                    Full-stack Starter,<br>
                    <span class="text-[#6EE7B7]">Ready to Ship.</span>
                </h1>
            </div>

            <div class="w-full max-w-xl rounded-lg border border-gray-200 dark:border-white/8 bg-gray-50 dark:bg-[#0A0A0F] overflow-hidden shadow-sm dark:shadow-xl">
                <div class="flex items-center gap-1.5 px-4 py-3 border-b border-gray-200 dark:border-white/6">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span class="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span class="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span class="ml-auto text-[11px] text-gray-400 dark:text-[#444]">~/project — zsh</span>
                </div>
                <div class="px-5 py-4 flex flex-col text-[12.5px] leading-[1.95] font-mono">
                    <div>
                        <span class="text-gray-400 dark:text-[#555]">$ </span>
                        <span class="text-[#6EE7B7]">git clone https://github.com/maktezi/nuxt-laravel-boilerplate</span>
                    </div>
                    <div class="text-gray-400 dark:text-[#555]">
                        Cloning into 'boilerplate'...
                    </div>
                    <div class="h-[0.5em]" />
                    <div>
                        <span class="text-gray-400 dark:text-[#555]">$ </span>
                        <span class="text-[#6EE7B7]">composer install && php artisan migrate --seed</span>
                    </div>
                    <div class="text-[#6EE7B7]">
                        ✓ Database ready
                    </div>
                    <div class="h-[0.5em]" />
                    <div>
                        <span class="text-gray-400 dark:text-[#555]">$ </span>
                        <span class="text-[#6EE7B7]">npm install && npm run dev</span>
                    </div>
                    <div>
                        <span class="text-[#6EE7B7]">✓ Nuxt 4 ready on </span>
                        <span class="text-[#A78BFA]">http://localhost:3000</span>
                    </div>
                    <div class="mt-0.5">
                        <span class="terminal-cursor inline-block w-1.75 h-3.25 bg-[#6EE7B7] align-middle" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                <div class="flex flex-col gap-1 rounded-lg border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.03] p-4">
                    <p class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        backend
                    </p>
                    <p class="text-[13px] text-gray-900 dark:text-gray-100">
                        localhost:8000
                    </p>
                    <p class="text-[11px] text-gray-400 dark:text-gray-500">
                        <span class="text-[#A78BFA]">/graphql</span> endpoint
                    </p>
                </div>
                <div class="flex flex-col gap-1 rounded-lg border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.03] p-4">
                    <p class="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        frontend
                    </p>
                    <p class="text-[13px] text-gray-900 dark:text-gray-100">
                        localhost:3000
                    </p>
                    <p class="text-[11px] text-gray-400 dark:text-gray-500">
                        Nuxt dev server
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap justify-center gap-2">
                <span class="text-[10px] px-2.5 py-1 rounded border border-[#6EE7B7]/40 text-[#6EE7B7] bg-[#6EE7B7]/[0.07]">Nuxt 4</span>
                <span class="text-[10px] px-2.5 py-1 rounded border border-[#F87171]/40 text-[#F87171] bg-[#F87171]/[0.07]">Laravel 13</span>
                <span class="text-[10px] px-2.5 py-1 rounded border border-[#C084FC]/40 text-[#C084FC] bg-[#C084FC]/[0.07]">GraphQL · Lighthouse</span>
                <span class="text-[10px] px-2.5 py-1 rounded border border-[#A78BFA]/40 text-[#A78BFA] bg-[#A78BFA]/[0.07]">Apollo Client</span>
                <span class="text-[10px] px-2.5 py-1 rounded border border-[#FCD34D]/40 text-[#FCD34D] bg-[#FCD34D]/[0.07]">Laravel Passport</span>
                <span class="text-[10px] px-2.5 py-1 rounded border border-gray-300 dark:border-white/[0.12] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.04]">PostgreSQL / MySQL</span>
            </div>

            <div class="flex flex-wrap justify-center gap-3">
                <UButton
                    to="/dashboard"
                    size="lg"
                    class="bg-[#6EE7B7] text-[#0A0A0F] hover:opacity-85 font-semibold text-[13px] tracking-wide border-0"
                >
                    Get started
                </UButton>
                <UButton
                    to="https://lighthouse-php.com"
                    target="_blank"
                    size="lg"
                    color="neutral"
                    variant="outline"
                    class="text-[13px] tracking-wide"
                >
                    Lighthouse Docs
                </UButton>
                <UButton
                    to="https://ui.nuxt.com"
                    target="_blank"
                    size="lg"
                    color="neutral"
                    variant="outline"
                    class="text-[13px] tracking-wide"
                >
                    Nuxt UI Docs
                </UButton>
            </div>
        </main>
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
