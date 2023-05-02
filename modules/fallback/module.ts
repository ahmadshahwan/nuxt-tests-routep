import {resolve} from 'path';
import {defineNuxtModule, extendPages} from '@nuxt/kit';

export default defineNuxtModule({
    setup() {
        extendPages((pages) => {
            pages.push({
                name: `fallback_on_not_found`,
                path: `/:pathMatch(.*)*`,
                file: resolve(__dirname, './fallback.vue'),
            });
        });
    },
});
