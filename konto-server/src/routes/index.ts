import { Express } from 'express'
import { accountRouter } from './account/account'

export const initAppRoutes = (app: Express) => {
  app.use('/account', accountRouter)
}
