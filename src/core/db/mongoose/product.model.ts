import { type InferSchemaType, type Model, Schema, Types, model } from 'mongoose'

const productSchema = new Schema(
  {
    _id: { type: Types.ObjectId, required: true },
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true, maxlength: 255 },
  },
  {
    collection: 'product',
    versionKey: false,
  },
)

export type IProduct = InferSchemaType<typeof productSchema>

export type IProductModel = Model<IProduct>

export const ProductModel: IProductModel = model<IProduct>('Product', productSchema)
