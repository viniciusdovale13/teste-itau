export interface Product {
  storeId: string
  productName: string
  productId: string
  productSlug: string
  productDescription: string
  productAttributes: ProductAttribute[]
  brand: string
  skuId: string
  slug: string
  ean: string
  name: string
  description: string
  attributes: Attribute[]
  thumbnail: Thumbnail
  images: Image[]
  categories: string[]
  type: string
  sellerName: string
  sellerId: string
  sellerSkuId: string
  price: number
  stockBalance: number
  shippingCost: any
}

export interface ProductAttribute {
  required: boolean
  sort: number
  _id: string
  values: Value[]
  name: string
  code: string
}

export interface Value {
  sort: number
  _id: string
  code: string
  value: string
}

export interface Attribute {
  required: boolean
  sort: number
  code: string
  name: string
  values: Value2[]
}

export interface Value2 {
  sort: number
  code: string
  value: string
}

export interface Thumbnail {
  sort: number
  ext: string
  path: string
}

export interface Image {
  sort: number
  ext: string
  path: string
}
