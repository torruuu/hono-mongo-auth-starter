import { ProductModel } from '@/core/db/mongoose/product.model.js'
import type { CreateProduct, Product } from '@/features/product/product.types.js'

export async function getAllProducts(): Promise<Product[]> {
  return ProductModel.find().lean()
}

export async function getProductById(id: string): Promise<Product | null> {
  return ProductModel.findById(id).lean()
}

export async function createProduct(data: CreateProduct): Promise<Product> {
  const product = await ProductModel.create(data)
  return product.toObject()
}
