<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const colorMode = useColorMode();
const { currentLanguage, alternatePaths, canonicalUrl } = useLanguage();
const { t } = useTranslations();

const favicon = computed(() => {
  const timestamp = Date.now();
  return colorMode.value === 'dark'
    ? `/favicon_black.ico?t=${timestamp}`
    : `/favicon.ico?t=${timestamp}`;
});

const baseTitle = 'Hatsura Dev';

const headLinks = computed(() => [
  { rel: 'icon', type: 'image/x-icon', href: favicon.value },
  { rel: 'canonical', href: canonicalUrl() },
  { rel: 'alternate', hreflang: 'en', href: `https://hatsura.dev${alternatePaths.value.en}` },
  { rel: 'alternate', hreflang: 'ja', href: `https://hatsura.dev${alternatePaths.value.ja}` },
  { rel: 'alternate', hreflang: 'x-default', href: `https://hatsura.dev${alternatePaths.value.en}` },
]);

const identitySchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hatsura',
  alternateName: ['Hatsura Dev', 'hatsura dev', 'hatsura', 'Hatsura.dev', 'hatsura.dev'],
  url: 'https://hatsura.dev',
  sameAs: [
    'https://github.com/hatsuraide',
    'https://discord.com/users/1037818849841655818',
  ],
}));

useHead(() => ({
  htmlAttrs: { lang: currentLanguage.value },
  titleTemplate: (titleChunk) => {
    if (!titleChunk) return baseTitle;
    if (titleChunk.includes('Hatsura')) return titleChunk;
    return `${titleChunk} - ${baseTitle}`;
  },
  meta: [
    { name: 'description', content: t.value.meta.siteDescription },
    { property: 'og:site_name', content: 'Hatsura' },
    { property: 'og:type', content: 'website' }
  ],
  link: headLinks.value,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(identitySchema.value),
    },
  ],
}));
</script>