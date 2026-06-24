<script setup>
useHead({
    htmlAttrs: {

        lang: 'en'

    },
    link: [
        { href: '/favicon.ico', rel: 'icon' }
    ],
    meta: [
        { content: 'width=device-width, initial-scale=1', name: 'viewport' }
    ]
})

const title = 'Nuxt Laravel Boilerplate'
const description = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
    description,
    ogDescription: description,
    ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
    ogTitle: title,
    title,
    twitterCard: 'summary_large_image',
    twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png'
})
</script>

<template>
    <UApp>
        <UMain>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>
    </UApp>
</template>
