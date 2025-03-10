import {generateFakeProduct} from '~/utils/generate'
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event, limit = Number(runtimeConfig.public.DEFAULT_LIMIT)) => {
    const products : Product[] = []

    for (let counter = 0; counter < limit; counter++) {
        products.push(generateFakeProduct());
    }

    return { products }
})