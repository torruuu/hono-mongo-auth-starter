import { zObjectId } from '@/shared/utils/validators.js'
import { z } from 'zod'

export const ProductSchema = z.object({
  _id: zObjectId(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  category: z.string(),
})

export const ProductListSchema = z.array(ProductSchema)

export const ProductIdParamSchema = z.object({
  id: z.string(),
})

export const CreateProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number(),
  stock: z.number().int().min(0),
  category: z.string().min(1),
})
