export type TProduct = {
  name: string
  regular_price: string
  discount_price: string
  description: string
  images: string[]
  categoryId: string
  vendorId?: string
  shopId: string
  productStatus: 'REGULAR' | 'FLASH_SALE' | 'HOT' | 'NEW' | 'DISCOUNT'
  inventory: string
  productSize: productSize[]
  productColors: productColors[]
}

type productSize = {
  size: string
  stock: string
}
type productColors = {
  color: string
  colorCode: string
  colorStock: string
}
