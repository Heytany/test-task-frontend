import { faker } from '@faker-js/faker'
import { path } from '~/utils/path'

declare global {
  interface Product {
    image: string
    newPrice: number
    oldPrice?: number
    brand: string
    name: string
    url: string
  }
}

export const generateFakeProduct = (): Product => {
  const hasOldPrice = faker.datatype.boolean()
  const newPrice = faker.commerce.price({ min: 100, max: 100000 })
  const oldPrice = hasOldPrice ? Number(newPrice) + Number(faker.commerce.price({ min: 1000, max: 10000 })) : undefined

  return {
    image: faker.image.url(),
    newPrice: Math.round(Number(newPrice)),
    oldPrice: oldPrice ? Math.round(Number(oldPrice)) : undefined,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    url: path.products + '/' + faker.number.int({ min: 10, max: 10000 }),
  }
}
