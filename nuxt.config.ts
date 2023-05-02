// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        buildAssetsDir: '/_assets/'
    },
    modules: [
        '~/modules/fallback/module'
    ]
})