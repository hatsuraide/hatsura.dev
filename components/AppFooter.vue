<template>
    <footer class="p-4">
        <div class="flex justify-between items-center px-4 sm:px-6 md:px-8">
            <div>© {{ new Date().getFullYear() }} <ULink to="/" class="cursor-default">Hatsura</ULink>. All rights reserved.</div>
            <div class="flex gap-4">
                <ULink v-if="config.siteLinks['discord-account']" :to="config.siteLinks['discord-account']" target="_blank">Discord</ULink>
                <ULink v-if="config.siteLinks.github" :to="config.siteLinks.github" target="_blank">GitHub</ULink>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { config } = useSiteConfig();
</script>