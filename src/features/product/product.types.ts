import type { IProduct } from '@/core/db/mongoose/product.model.js'

export type Product = IProduct

export type CreateProduct = Omit<IProduct, '_id'>
