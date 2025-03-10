import { generateFakeProduct } from '~/utils/generate'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event, limit = Number(runtimeConfig.public.PRODUCT_FETCH_LIMIT)) => {
  const products: Product[] = []

  for (let counter = 0; counter < limit; counter++) {
    products.push(generateFakeProduct())
  }

  return { products }
})
