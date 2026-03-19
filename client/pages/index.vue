<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <UContainer>
    <div class="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl font-bold tracking-tight">
          Nuxt + Laravel GraphQL Boilerplate
        </h1>
        <p class="text-lg text-muted max-w-xl mx-auto">
          A full-stack starter powered by Nuxt 4, Laravel 12, and GraphQL via Lighthouse.
          Batteries included: Apollo Client, Laravel Passport, and PostgreSQL/MySQL support.
        </p>
      </div>

      <!-- Stack badges -->
      <div class="flex flex-wrap justify-center gap-2">
        <UBadge
          color="primary"
          variant="subtle"
          size="md"
        >
          Nuxt 4
        </UBadge>
        <UBadge
          color="neutral"
          variant="subtle"
          size="md"
        >
          Laravel 12
        </UBadge>
        <UBadge
          color="success"
          variant="subtle"
          size="md"
        >
          GraphQL (Lighthouse)
        </UBadge>
        <UBadge
          color="warning"
          variant="subtle"
          size="md"
        >
          Apollo Client
        </UBadge>
        <UBadge
          color="info"
          variant="subtle"
          size="md"
        >
          Laravel Passport
        </UBadge>
        <UBadge
          color="neutral"
          variant="subtle"
          size="md"
        >
          PostgreSQL / MySQL
        </UBadge>
      </div>

      <!-- Quick start info -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg text-left">
        <div class="border border-default rounded-lg p-4 flex flex-col gap-1">
          <p class="text-xs font-semibold text-muted uppercase tracking-wider">
            Backend
          </p>
          <p class="text-sm font-mono text-highlighted">
            localhost:8000
          </p>
          <p class="text-xs text-muted">
            /graphql endpoint
          </p>
        </div>
        <div class="border border-default rounded-lg p-4 flex flex-col gap-1">
          <p class="text-xs font-semibold text-muted uppercase tracking-wider">
            Frontend
          </p>
          <p class="text-sm font-mono text-highlighted">
            localhost:3000
          </p>
          <p class="text-xs text-muted">
            Nuxt dev server
          </p>
        </div>
      </div>

      <div class="flex gap-3">
        <UButton
          to="/dashboard"
          color="primary"
          size="lg"
        >
          Get Started
        </UButton>
        <UButton
          to="https://lighthouse-php.com"
          target="_blank"
          color="warning"
          variant="outline"
          size="lg"
        >
          Lighthouse Docs
        </UButton>
        <UButton
          to="https://ui.nuxt.com"
          target="_blank"
          color="primary"
          variant="outline"
          size="lg"
        >
          Nuxt UI Docs
        </UButton>
      </div>
    </div>
  </UContainer>
</template>
