import env from '@/env.js'
import { getClient } from '@/integrations/database/config.js'
import { mongodbAdapter } from '@better-auth/mongo-adapter'
import { betterAuth } from 'better-auth'
import { openAPI } from 'better-auth/plugins'

const client = await getClient()

export const auth = betterAuth({
  basePath: '/auth',
  trustedOrigins: [env.FRONTEND_URL],
  emailAndPassword: {
    enabled: true,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5,
    },
  },
  plugins: [
    openAPI({
      disableDefaultReference: true,
    }),
  ],
  database: mongodbAdapter(client),
})
