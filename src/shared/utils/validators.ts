import { Types } from 'mongoose'
import { z } from 'zod'

export const zObjectId = () =>
  z
    .custom<Types.ObjectId>((val) => Types.ObjectId.isValid(val as string), {
      message: 'Invalid ObjectId',
    })
    .openapi({ type: 'string', format: 'objectId', example: '507f1f77bcf86cd799439011' })
