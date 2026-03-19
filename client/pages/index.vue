<script setup>
definePageMeta({
    layout: 'default'
})
</script>

<template>
    <UContainer>
        <div class="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
            <h1 class="text-4xl font-bold tracking-tight">
                Nuxt Laravel Boilerplate
            </h1>
            <p class="text-lg text-muted max-w-xl">
                A production-ready starter template powered by Nuxt UI and Laravel.
                Build beautiful, accessible, and performant applications.
            </p>
            <div class="flex gap-3">
                <UButton to="/dashboard" color="primary" size="lg">
                    Get Started
                </UButton>
                <UButton
                    to="https://ui.nuxt.com"
                    target="_blank"
                    color="neutral"
                    variant="outline"
                    size="lg"
                >
                    Nuxt UI Docs
                </UButton>
            </div>
        </div>
    </UContainer>
</template>
